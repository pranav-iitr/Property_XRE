import { useState } from 'react'
import AddPropertySteps, { AddPropertyStepConstant } from '../components/add-property/AddPropertySteps'
import ProjectInformation from '../components/add-property/projectInformation'
import UnitInformationForm from '../components/add-property/unitInformation'
import FloorInformationForm from '../components/add-property/floorInformation'
import OwnerInformation from '../components/add-property/ownerInformation'
import AppPopup from '../components/common/AppPopup'
import { useNavigate } from "react-router-dom"
import PropertyInfoDisplay from '../components/add-property/PropertyInfoDisplay'
import { sendFloorInfo, sendPersonInfo, sendProjectInfo, sendUnitInfo } from '../utils/api'


const fetchInitialValue = () => {
  const isLocalStorageDataExist = JSON.parse(localStorage.getItem('newEntry'));
  if (isLocalStorageDataExist) {
    return isLocalStorageDataExist
  }
  return { projectInformation: {}, floorInformation: {}, unitInformation: {}, ownerInformation: {} };
}



const AddPropertyPage = () => {
  const [formData, setFormData] = useState(fetchInitialValue())
  const [currentFormIndex, setCurrentFormIndex] = useState(0)
  const [popup, setPopup] = useState(false);


  const navigate = useNavigate();

  const updateInputValue = (value, event, type) => {
    const name = event?.target?.name
    const newFormData = { ...formData }
    newFormData[type][name] = value

    setFormData(newFormData)
  }

  const handleProperties = () => {
    var retrievedObject = JSON.parse(localStorage.getItem('newEntry'));

    const desiredObj = {
      id: "#00008",
      type: retrievedObject.projectInformation.buildingType,
      name: retrievedObject.projectInformation.name,
      location: retrievedObject.projectInformation.location,
      area: retrievedObject.projectInformation.totalArea,
      occupied: retrievedObject.projectInformation.occupiedArea,
      status: "Approved",
    }


    let propertyList = JSON.parse(localStorage.getItem('propertiesList'));

    if (propertyList) {
      propertyList.unshift(desiredObj);
    } else {
      propertyList = property;
      propertyList.unshift(desiredObj);
    }

    localStorage.setItem('propertiesList', JSON.stringify(propertyList));

    localStorage.removeItem('newEntry');
    navigate('/')
  }

  const getValue = (type, name) => {
    return formData[type][name]
  }

  const handleNextForm = () => {
    if (AddPropertyStepConstant.length - 1 > currentFormIndex) {
      setCurrentFormIndex(currentFormIndex + 1)
    }
    else { // Last Page -> Save -> Network Request (Payload of all the forms)
      // handleCreatePropertyApi()
    }
  }

  const handlePrevForm = () => {
    if (AddPropertyStepConstant.length - 1 >= currentFormIndex && currentFormIndex > 0) {
      setCurrentFormIndex(currentFormIndex - 1)
    }
  }

  const onSaveClick = async (e) => {
    e.preventDefault();
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 1:
        await sendProjectInfo({
          data: { Name: formData.projectInformation.name }
        });
        break;
      case 2:
        console.log(formData);
        await sendFloorInfo({
          data: {
            floorArea: Number(formData.floorInformation["floorArea"]),
            floorNumber: Number(formData.floorInformation["floorNumber"]),
            numberAvailableUnits: Number(formData.floorInformation["unitsAvailable"]),
            totalUnitsInFloor: Number(formData.floorInformation["totalUnits"])
          }
        })
        break;
      case 3:
        console.log(formData);
        await sendUnitInfo({
          data: {
            askingRental: Number(formData.unitInformation["askingRental"]),
            availabilityFor: Number(formData.unitInformation["availabilityFor"]),
            furnishingStatus: Number(formData.unitInformation["furnishingStatus"]),
            numberOfParkings: Number(formData.unitInformation["noOfParkings"]),
            unitArea: Number(formData.unitInformation["unitArea"]),
            unitNumber :Number(formData.unitInformation["unitNumber"]),
          }
        })
        break;
      case 4:
        console.log(formData);
        await sendPersonInfo({
          data: {
            email: Number(formData.ownerInformation["email"]),
            name: Number(formData.ownerInformation["name"]),
            phone: Number(formData.ownerInformation["mobileNumber"]),
          }
        })
        break;
      default:
        console.log(formData);
    }


    handleNextForm()
  }

  const showFormBasedOnId = () => {
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 1:
        return <ProjectInformation getValue={getValue} updateInputValue={updateInputValue} />
        break;
      case 2:
        return (
          <>
            <FloorInformationForm getValue={getValue} updateInputValue={updateInputValue} />
          </>
        )
        break;
      case 3:
        return (
          <>
            <UnitInformationForm getValue={getValue} updateInputValue={updateInputValue} />
          </>
        )
        break;
      case 4:
        return (
          <>
            <OwnerInformation getValue={getValue} updateInputValue={updateInputValue} />
          </>
        )
        break;
      default:
        break;
    }
  }

  // const handleCreatePropertyApi = async (status) => {
  //   const apiUrl = "/api/property/create";
  //   const payload = {
  //     projectName: formData["project_name"],
  //     plotNumber: formData["plot_number"],
  //     totalNumOfFloors: formData["num_of_floors"],
  //     totalBasements: formData["total_basements"],
  //     totalArea: formData["total_area"],
  //     vacantArea: formData["vacant_area"],
  //     occupiedArea: formData["occupied_area"],
  //     features: formData["features"],
  //     perFloorSize: formData["per_floor_size"],
  //     buildingType: formData["building_type"],
  //     powerBackup: formData["power_backup"],
  //     airConditioning: formData["air_conditioning"],
  //     states: formData["states"],
  //     city: formData["city"],
  //     zone: formData["zone"],
  //     projectPhoto: "dummy",
  //     location: "dummy",

  //     // unit information
  //     unitInformation: formData["unit_number"],
  //     unitArea: formData["unit_area"],
  //     askingRental: formData["asking_rental"],
  //     noOfParking: formData["no_of_parkings"],
  //     availablityFor: formData["availability_for"],
  //     furnishingStatus: formData["furnishing_status"],
  //     ageOfFurnishing: formData["age_of_furnishing"],

  //     // floor information
  //     floorNumber: formData["floor_number"],
  //     totalUnits: formData["total_units"],
  //     unitsAvailable: formData["units_available"],
  //     floorArea: formData["floor_area"],
  //     floorPlanPhoto: "dummy",

  //     //owner information
  //     ownerName: formData["owner_name"],
  //     ownerEmail: formData["owner_email"],
  //     ownerPhoneNumber: formData["owner_mobile_number"],
  //     concernedPerson: formData["concerned_person"],
  //     camCharges: formData["cm_charges"],
  //     ...status ? { propertyStatus: status } : {}
  //   }
  //   const requestData = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify(payload),
  //   };

  //   const response = await fetch(apiUrl, requestData);
  //   setPopup(true)
  // }


  const showProjectInfoOnTop = () => {
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 2:
        return (
          <>
            <PropertyInfoDisplay />
          </>
        )
        break;
      case 3:
        return (
          <>
            <PropertyInfoDisplay />
          </>
        )
        break;
      case 4:
        return (
          <>
            <PropertyInfoDisplay />
          </>
        )
        break;
      default:
        <PropertyInfoDisplay />
        break;
    }
  }
  return (
    <>
      <div className='flex justify-center gap-8 mt-4'>
        <div className="border-b border-gray-200 bg-[white] pr-4 py-5 w-[250px] shadow-md rounded-md h-[100%]">
          <AddPropertySteps currentFormIndex={currentFormIndex} />
        </div>

        <div className='w-[50%]'>

          {showProjectInfoOnTop()}
          <div className="border-b border-gray-200 bg-[white] px-4 py-5 sm:px-6 shadow-md rounded-md ">
            <form>
              {showFormBasedOnId()}
              <div className="mt-6 flex items-center justify-between gap-x-6">
                <button
                  type="button"
                  className="rounded-md bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm hover:bg-red-100"
                // onClick={() => handleCreatePropertyApi('draft')}
                >
                  Save to Draft
                </button>
                <div>
                  <button
                    type="button"
                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-3"
                    onClick={handlePrevForm}
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-red-900 px-4 py-2 text-sm font-light text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onSaveClick}
                  >
                    Save
                  </button>
                  <AppPopup title='Property Added' showPopup={popup} setShowPopup={setPopup} buttonTitle='Go To Property List' onButtonClick={handleProperties} />
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default AddPropertyPage