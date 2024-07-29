import pandas as pd
from django.core.management.base import BaseCommand
from properties.models import Properties, Floor, Unit, Owner
from User.models import User
from django.db.models import Sum
from django.db import models
class Command(BaseCommand):
    help = 'Import property data from Excel sheets'
    books = ['./book.xlsx','./book2.xlsx']
    def handle(self, *args, **kwargs):
        # Load the Excel file
        for i in range(len(self.books)):
            file_path = self.books[i]
            excel_data = pd.read_excel(file_path, sheet_name=None)

            for sheet_name, data in excel_data.items():
                data['Area'] = pd.to_numeric(data['Area'], errors='coerce').fillna(0).astype(int)
                data['Floor'] = pd.to_numeric(data['Floor'], errors='coerce').fillna(0).astype(int)
                data['Unit No.'] = pd.to_numeric(data['Unit No.'], errors='coerce').fillna(0).astype(int)
                data['Owner No.'] = pd.to_numeric(data['Owner No.'], errors='coerce').fillna(0).astype(int)

                try:
                    property_instance, created = Properties.objects.get_or_create(
                            title=sheet_name,
                            defaults = {'location':  'Golf Course Road'  , 'toatal_area': 0, 'vacant_area': 0,"city":'Gurugram',"state":"Haryana",'type':'Commercial'}
                        )
                    self.stdout.write(self.style.SUCCESS(f'Importing data of property: {property_instance}'))
                    
                    for _, row in data.iterrows():
                        floor_no = row['Floor']
                        unit_no = row['Unit No.']
                        area = row['Area']
                        owner_name = row['Owner']
                        owner_no = row['Owner No.']
                        available_for = row['Available for']

                        # Create or get the Property instance
                        

                        # Check if the floor already exists for this property
                        floor_instance, created = Floor.objects.get_or_create(
                            floor_no=floor_no,
                            property=property_instance,
                            defaults={'total_unit': 0, 'unit_available': 0, 'floor_area': 0}
                        )

                        if isinstance(available_for, str):
                            available_for = available_for.lower()
                        else:
                            available_for = 'occupied'  # default value if available_for is not a string


                        # Update the Floor instance if it already exists
                        if not created:
                            floor_instance.total_unit += 1
                            floor_instance.floor_area += area
                            if available_for.lower() == 'vacant':
                                floor_instance.unit_available += 1
                            floor_instance.save()
                        else:
                            floor_instance.total_unit = 1
                            floor_instance.floor_area = area
                            floor_instance.unit_available = 1 if available_for.lower() == 'vacant' else 0
                            floor_instance.save()

                        # Check if the owner already exists for this property
                        owner_instance, created = Owner.objects.get_or_create(
                            name=owner_name,
                            phone=owner_no,
                            property=property_instance,
                            defaults={'email': '', 'cam_charges': 0, 'vacating_area': 0, 'spoc': 'NA'}
                        )

                        # Create the Unit instance
                        unit_instance = Unit.objects.create(
                            unit_no=unit_no,
                            property=property_instance,
                            floor=floor_instance,
                            area=area,
                            price=0,  # assuming price is not provided in the sheet
                            no_of_parking=0,  # assuming no_of_parking is not provided in the sheet
                            available_for=available_for if pd.notna(available_for) else 'occupied',
                            furnishng_status='unknown',  # assuming furnishing_status is not provided in the sheet
                            age_of_furnishing=0,  # assuming age_of_furnishing is not provided in the sheet
                            Owner=owner_instance
                        )

                        # Update the Property instance
                        property_instance.toatal_area = property_instance.floor_set.aggregate(models.Sum('floor_area'))['floor_area__sum'] or 0
                        property_instance.vacant_area = property_instance.unit_set.filter(available_for='vacant').aggregate(models.Sum('area'))['area__sum'] or 0
                        property_instance.save()
                except Exception as e:
                    self.stdout.write(self.style.ERROR(f'Failed to import data from sheet: {sheet_name}'))
                    self.stdout.write(self.style.ERROR(e))
                    continue

        self.stdout.write(self.style.SUCCESS('Successfully imported property data'))
