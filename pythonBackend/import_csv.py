from properties.models import Properties,Features,Floor,Unit
import csv

csv_file = 'properties.csv'

csv_data = csv.reader(open(csv_file))

name = ""
max_floor = 0
def import_properties():
    property =Properties.objects.create(name=name)
    no_of_floor = 0
    
    for row in csv_data:
        floor_id = row[0]
        floor=Floor.objects.filter(property = property).filter(id=floor_id)
        if not floor:
            floor = Floor.objects.create(floor_no=row[0],unit_available=row[1],total_unit=1,floor_area=0,property=property)
        else:
            floor = floor.first()
            floor.unit_available += 1
        floor.save()

        unit = Unit.objects.create(unit_no=row[1],property=property,floor=floor,area=row[2],price=0,no_of_parking=0,available_for=row[6],furnishng_status=row[7],age_of_furnishing=0)
        
        
