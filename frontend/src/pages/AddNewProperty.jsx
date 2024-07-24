import { useState } from "react";
import AddPropertySteps, {
  AddPropertyStepConstant,
} from "../components/add-property/AddPropertySteps";
import ProjectInformation from "../components/add-property/projectInformation";
import UnitInformationForm from "../components/add-property/unitInformation";
import FloorInformationForm from "../components/add-property/floorInformation";
import OwnerInformation from "../components/add-property/ownerInformation";
import AppPopup from "../components/common/AppPopup";
import { useNavigate } from "react-router-dom";
import PropertyInfoDisplay from "../components/add-property/PropertyInfoDisplay";
import {
  sendFloorInfo,
  sendPersonInfo,
  sendProjectInfo,
  sendUnitInfo,
  updateOneFloor,
  updateOnePerson,
  updateOneProject,
  updateOneUnit,
} from "../utils/api";
import { useMatchStore } from "../store/projectStore";
import Modal from "@mui/material/Modal";
import { BsCheck } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { useAtom } from "jotai";
import { floor, unit } from "../store/photo";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const fetchInitialValue = () => {
  const isLocalStorageDataExist = JSON.parse(localStorage.getItem("newEntry"));
  if (isLocalStorageDataExist) {
    return isLocalStorageDataExist;
  }
  return {
    projectInformation: {},
    floorInformation: {},
    unitInformation: {},
    ownerInformation: {},
  };
};

const AddPropertyPage = () => {
  const [formData, setFormData] = useState(fetchInitialValue());
  const [open, setOpen] = useState(false);
  const [unitValue, setUnitValue] = useAtom(unit);
  const [floorValue, setFloorValue] = useAtom(floor);
  const {
    personId,
    floorId,
    unitId,
    projectId,
    setProjectId,
    setFloorId,
    setUnitId,
    setPersonId,
    currentFormIndex,
    setCurrentFormIndex,
  } = useMatchStore();
  const [popup, setPopup] = useState(false);

  const navigate = useNavigate();

  const updateInputValue = (value, event, type, check = null) => {
    let name = null;
    if (check) {
      name = check;
    } else {
      name = event?.target?.name;
    }
    const newFormData = { ...formData };
    newFormData[type][name] = value;

    setFormData(newFormData);
  };

  const handleProperties = () => {
    var retrievedObject = JSON.parse(localStorage.getItem("newEntry"));

    const desiredObj = {
      id: "#00008",
      type: retrievedObject.projectInformation.buildingType,
      name: retrievedObject.projectInformation.name,
      location: retrievedObject.projectInformation.location,
      area: retrievedObject.projectInformation.totalArea,
      occupied: retrievedObject.projectInformation.occupiedArea,
      status: "Approved",
    };

    let propertyList = JSON.parse(localStorage.getItem("propertiesList"));

    if (propertyList) {
      propertyList.unshift(desiredObj);
    } else {
      propertyList = property;
      propertyList.unshift(desiredObj);
    }

    localStorage.setItem("propertiesList", JSON.stringify(propertyList));

    localStorage.removeItem("newEntry");
    navigate("/");
  };

  const getValue = (type, name) => {
    return formData[type][name];
  };

  const handleNextForm = () => {
    if (AddPropertyStepConstant.length - 1 > currentFormIndex) {
      setCurrentFormIndex(currentFormIndex + 1);
    } else {
      // Last Page -> Save -> Network Request (Payload of all the forms)
      // handleCreatePropertyApi()
    }
  };

  const handlePrevForm = () => {
    if (
      AddPropertyStepConstant.length - 1 >= currentFormIndex &&
      currentFormIndex > 0
    ) {
      setCurrentFormIndex(currentFormIndex - 1);
    }
  };

  const onSaveClick = async (e) => {
    e.preventDefault();
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 1:
        if (projectId) {
          await updateOneProject(
            {
              titlw: formData.projectInformation.name,
            },
            projectId
          );
        } else {
          console.log(
            formData,
            formData?.projectInformation?.name,
            formData?.projectInformation?.name == ""
          );
          if (
            !formData?.projectInformation?.name ||
            formData?.projectInformation?.name == ""
          ) {
            toast.error("Please Enter Project Name");
            return;
          }
          if (
            !formData?.projectInformation?.plotNumber ||
            formData?.projectInformation?.plotNumber == ""
          ) {
            toast.error("Please Enter Plot Number");
            return;
          }
          if (
            !formData?.projectInformation?.totalFloors ||
            formData?.projectInformation?.totalFloors == ""
          ) {
            toast.error("Please Enter Total Floors");
            return;
          }
          if (
            !formData?.projectInformation?.totalBasements ||
            formData?.projectInformation?.totalBasements == ""
          ) {
            toast.error("Please Enter Total Basements");
            return;
          }
          if (
            !formData?.projectInformation?.totalArea ||
            formData?.projectInformation?.totalArea == ""
          ) {
            toast.error("Please Enter Total Area");
            return;
          }
          if (
            !formData?.projectInformation?.vacantArea ||
            formData?.projectInformation?.vacantArea == ""
          ) {
            toast.error("Please Enter Vacant Area");
            return;
          }
          if (
            !formData?.projectInformation?.perFloorSize ||
            formData?.projectInformation?.perFloorSize == ""
          ) {
            toast.error("Please Enter Per Floor Size");
            return;
          }
          if (
            !formData?.projectInformation?.buildingType ||
            formData?.projectInformation?.buildingType == ""
          ) {
            toast.error("Please Enter Building Type");
            return;
          }
          if (
            !formData?.projectInformation?.powerBackup ||
            formData?.projectInformation?.powerBackup == ""
          ) {
            toast.error("Please Enter Power Backup");
            return;
          }
        
          if (
            !formData?.projectInformation?.state ||
            formData?.projectInformation?.state == ""
          ) {
            toast.error("Please Enter State");
            return;
          }
          if (
            !formData?.projectInformation?.city ||
            formData?.projectInformation?.city == ""
          ) {
            toast.error("Please Enter City");
            return;
          }
          if (
            !formData?.projectInformation?.zone ||
            formData?.projectInformation?.zone == ""
          ) {
            toast.error("Please Enter Zone");
            return;
          }
          if (
            !formData?.projectInformation?.location ||
            formData?.projectInformation?.location == ""
          ) {
            toast.error("Please Enter Location");
            return;
          }
          if (
            !formData?.projectInformation?.propertyImage ||
            formData?.projectInformation?.propertyImage == ""
          ) {
            console.log(formData.projectInformation);
            toast.error("Please Enter Project Image");
            return;
          }
          const Floors = parseInt(formData.projectInformation.totalFloors);
          const sendData = new FormData();
          sendData.append("title", formData.projectInformation.name);
          sendData.append("plot_no", formData.projectInformation.plotNumber);
          sendData.append("no_of_floor", parseInt(Floors));
          sendData.append(
            "toatal_basement",
            parseInt(formData.projectInformation.totalBasements)
          );
          sendData.append("toatal_area", formData.projectInformation.totalArea);
          sendData.append("vacant_area", formData.projectInformation.vacantArea);
          sendData.append(
            "per_floor_area",
            formData.projectInformation.perFloorSize
          );
          sendData.append("type", formData.projectInformation.buildingType);
          sendData.append(
            "power_backup",
            formData.projectInformation.powerBackup == "Yes" ? true : false
          );
          sendData.append(
            "air_conditioned",
            formData.projectInformation.airConditioned == "Yes" ? true : false
          );
          sendData.append("state", formData.projectInformation.state);
          sendData.append("city", formData.projectInformation.city);
          sendData.append("zone", formData.projectInformation.zone);
          sendData.append("location", formData.projectInformation.location);
          sendData.append("status", "pending");
          sendData.append("photo", formData.projectInformation.propertyImage);
          
          const data = {
            title: formData.projectInformation.name,
            plot_no: formData.projectInformation.plotNumber,
            no_of_floor: parseInt(formData.projectInformation.totalFloors),
            toatal_basement: parseInt(
              formData.projectInformation.totalBasements
            ),
            toatal_area: formData.projectInformation.totalArea,
            vacant_area: formData.projectInformation.vacantArea,
            per_floor_area: formData.projectInformation.perFloorSize,
            type: formData.projectInformation.buildingType,
            power_backup:
              formData.projectInformation.powerBackup == "Yes" ? true : false,
            air_conditioned:
              formData.projectInformation.airConditioned == "Yes"
                ? true
                : false,
            state: formData.projectInformation.state,
            city: formData.projectInformation.city,
            zone: formData.projectInformation.zone,
            location: formData.projectInformation.location,
            status: "pending",
            photo: formData.projectInformation.propertyImage,
          };
          await sendProjectInfo(sendData).then((infoProject) => {
            setProjectId(infoProject?.data?.id);
            setFloorValue(parseInt(Floors));
            setOpen(true);
          });
          // setProjectId(infoProject.data.id);
        }
        break;
      case 2:
        if (
          !formData?.floorInformation?.floorArea ||
          formData?.floorInformation?.floorArea == ""
        ) {
          toast.error("Please Enter Floor Area");
          return;
        }
        if (
          !formData?.floorInformation?.floorNumber ||
          formData?.floorInformation?.floorNumber == ""
        ) {
          toast.error("Please Enter Floor Number");
          return;
        }
        if (
          !formData?.floorInformation?.unitsAvailable ||
          formData?.floorInformation?.unitsAvailable == ""
        ) {
          toast.error("Please Enter Units Available");
          return;
        }
        if (
          !formData?.floorInformation?.totalUnits ||
          formData?.floorInformation?.totalUnits == ""
        ) {
          toast.error("Please Enter Total Units");
          return;
        }
        if (
          !formData?.floorInformation?.FloorImage ||
          formData?.floorInformation?.FloorImage == ""
        ) {
          toast.error("Please Enter Floor Image");
          return;
        }
        const Units = parseInt(formData.floorInformation.totalUnits);
        if (floorId) {
          

          const sendData = new FormData();
          sendData.append(
            "floor_area",
            Number(formData.floorInformation["floorArea"])
          );
          sendData.append(
            "floor_no",
            Number(formData.floorInformation["floorNumber"])
          );
          sendData.append(
            "unit_available",
            Number(formData.floorInformation["unitsAvailable"])
          );
          sendData.append(
            "total_unit",
            Number(formData.floorInformation["totalUnits"])
          );
          sendData.append("property", projectId);
          sendData.append(
            "floor_plan",
            formData.floorInformation["FloorImage"]
          );
          await updateOneFloor(sendData, floorId);
        } else {
          const sendData = new FormData();
          sendData.append(
            "floor_area",
            Number(formData.floorInformation["floorArea"])
          );
          sendData.append(
            "floor_no",
            Number(formData.floorInformation["floorNumber"])
          );
          sendData.append(
            "unit_available",
            Number(formData.floorInformation["unitsAvailable"])
          );
          sendData.append(
            "total_unit",
            Number(formData.floorInformation["totalUnits"])
          );
          sendData.append("property", projectId);
          sendData.append(
            "floor_plan",
            formData.floorInformation["FloorImage"]
          );

          const infoFloor = await sendFloorInfo(sendData);
          setFloorId(infoFloor?.data?.id).then(() => {
            setUnitValue(parseInt(Units));
            setOpen(true);
            // handleNextForm();
          });
        }
        break;
      case 3:
        if (
          !formData?.unitInformation?.askingRental ||
          formData?.unitInformation?.askingRental == ""
        ) {
          toast.error("Please Enter Asking Rental");
          return;
        }
        if (
          !formData?.unitInformation?.availabilityFor ||
          formData?.unitInformation?.availabilityFor == ""

        ) {
          toast.error("Please Enter Availability For");
          return;
        }
        if (
          !formData?.unitInformation?.furnishingStatus || formData?.unitInformation?.furnishingStatus == ""

        ) {
          toast.error("Please Enter Furnishing Status");
          return;
        }
        if (
          !formData?.unitInformation?.noOfParkings ||
          formData?.unitInformation?.noOfParkings == ""
        ) {
          toast.error("Please Enter No Of Parkings");
          return;
        }
        if (
          !formData?.unitInformation?.unitArea ||
          formData?.unitInformation?.unitArea == ""
        ) {
          toast.error("Please Enter Unit Area");
          return;
        }
        if (
          !formData?.unitInformation?.unitNumber ||
          formData?.unitInformation?.unitNumber == ""
        ) {
          toast.error("Please Enter Unit Number");
          return;
        }
        if (
          !formData?.unitInformation?.ageOfFurnishing ||
          formData?.unitInformation?.ageOfFurnishing == ""
        ) {
          toast.error("Please Enter Age Of Furnishing");
          return;
        }


        if (unitId) {
          await updateOneUnit(
            {
              price: Number(formData.unitInformation["askingRental"]),
              available_for: formData.unitInformation["availabilityFor"],
              furnishng_status: formData.unitInformation["furnishingStatus"],
              no_of_parking: Number(formData.unitInformation["noOfParkings"]),
              area: Number(formData.unitInformation["unitArea"]),
              unit_no: Number(formData.unitInformation["unitNumber"]),
              age_of_furnishing: formData.unitInformation["ageOfFurnishing"],
              property: projectId,
            },

            unitId
          );
        } else {
          await sendUnitInfo({
            price: Number(formData.unitInformation["askingRental"]),
            available_for: formData.unitInformation["availabilityFor"],
            furnishng_status: formData.unitInformation["furnishingStatus"],
            no_of_parking: Number(formData.unitInformation["noOfParkings"]),
            area: Number(formData.unitInformation["unitArea"]),
            unit_no: Number(formData.unitInformation["unitNumber"]),
            age_of_furnishing: formData.unitInformation["ageOfFurnishing"],
            property: projectId,
          }).then((infoUnit) => {
            setUnitId(infoUnit?.data?.id);
            setOpen(true);
            // handleNextForm();
          });
        }
        break;
      case 4:
        if (personId) {
          await updateOnePerson(
            {
              email: formData.ownerInformation["email"],
              name: formData.ownerInformation["name"],
              phone: Number(formData.ownerInformation["mobileNumber"]),
              property: projectId,
              cam_charges: formData.ownerInformation["cmCharges"],
              vacating_area: formData.ownerInformation["vacantArea"],
            },
            personId
          );
        } else {
          const infoPerson = await sendPersonInfo({
            email: formData.ownerInformation["email"],
            name: formData.ownerInformation["name"],
            phone: Number(formData.ownerInformation["mobileNumber"]),
            property: projectId,
            cam_charges: formData.ownerInformation["cmCharges"],
            vacating_area: formData.ownerInformation["vacantArea"],
          });
          setPersonId(infoPerson?.data?.id);
        }
        setUnitValue(unitValue - 1);
        if (unitValue > 0) {
          setPersonId(null);
          setUnitId(null);
          setCurrentFormIndex(currentFormIndex - 2);
        } else {
          setFloorValue(floorValue - 1);
          setUnitId(null);
          setPersonId(null);
          if (floorValue > 0) {
            setFloorId(null);
            setCurrentFormIndex(currentFormIndex - 3);
          } else {
            setFloorId(null);
            setProjectId(null);
            navigate("/properties");
            setCurrentFormIndex(0);
          }
        }

        // setFloorId(null);

        // setProjectId(null);

        break;
      default:
        console.log();
    }
    handleNextForm();
  };

  const onSaveDraft = async (e) => {
    e.preventDefault();
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 1:
        if (projectId) {
          await updateOneProject(
            {
              data: { Name: formData.projectInformation.name },
            },
            projectId
          );
        } else {
          const infoProject = await sendProjectInfo({
            data: { Name: formData.projectInformation.name },
          });
          setProjectId(infoProject.data.data.id);
        }
        navigate("/property");
        break;
      case 2:
        if (floorId) {
          await updateOneFloor(
            {
              data: {
                floorArea: Number(formData.floorInformation["floorArea"]),
                floorNumber: Number(formData.floorInformation["floorNumber"]),
                numberAvailableUnits: Number(
                  formData.floorInformation["unitsAvailable"]
                ),
                totalUnitsInFloor: Number(
                  formData.floorInformation["totalUnits"]
                ),
                project: {
                  connect: [{ id: projectId }],
                },
              },
            },
            floorId
          );
        } else {
          const infoFloor = await sendFloorInfo({
            data: {
              floorArea: Number(formData.floorInformation["floorArea"]),
              floorNumber: Number(formData.floorInformation["floorNumber"]),
              numberAvailableUnits: Number(
                formData.floorInformation["unitsAvailable"]
              ),
              totalUnitsInFloor: Number(
                formData.floorInformation["totalUnits"]
              ),
              project: {
                connect: [{ id: projectId }],
              },
            },
          });
          setFloorId(infoFloor.data.data.id);
        }
        navigate("/property");
        break;
      case 3:
        if (unitId) {
          await updateOneUnit(
            {
              data: {
                askingRental: Number(formData.unitInformation["askingRental"]),
                availabilityFor: formData.unitInformation["availabilityFor"],
                furnishingStatus: formData.unitInformation["furnishingStatus"],
                numberOfParkings: Number(
                  formData.unitInformation["noOfParkings"]
                ),
                unitArea: Number(formData.unitInformation["unitArea"]),
                unitNumber: Number(formData.unitInformation["unitNumber"]),
                project: {
                  connect: [{ id: projectId }],
                },
              },
            },
            unitId
          );
        } else {
          const infoUnit = await sendUnitInfo({
            data: {
              askingRental: Number(formData.unitInformation["askingRental"]),
              availabilityFor: formData.unitInformation["availabilityFor"],
              furnishingStatus: formData.unitInformation["furnishingStatus"],
              numberOfParkings: Number(
                formData.unitInformation["noOfParkings"]
              ),
              unitArea: Number(formData.unitInformation["unitArea"]),
              unitNumber: Number(formData.unitInformation["unitNumber"]),
              project: {
                connect: [{ id: projectId }],
              },
            },
          });
          setUnitId(infoUnit.data.data.id);
        }
        navigate("/property");
        break;
      case 4:
        console.log();
        if (personId) {
          await updateOnePerson(
            {
              data: {
                email: formData.ownerInformation["email"],
                name: formData.ownerInformation["name"],
                phone: Number(formData.ownerInformation["mobileNumber"]),
                project: {
                  connect: [{ id: projectId }],
                },
              },
            },
            personId
          );
        } else {
          const infoPerson = await sendPersonInfo({
            data: {
              email: formData.ownerInformation["email"],
              name: formData.ownerInformation["name"],
              phone: Number(formData.ownerInformation["mobileNumber"]),
              project: {
                connect: [{ id: projectId }],
              },
            },
          });
          setPersonId(infoPerson.data.data.id);
        }
        navigate("/property");
        break;
      default:
        console.log();
    }
  };

  const showFormBasedOnId = () => {
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 1:
        return (
          <ProjectInformation
            getValue={getValue}
            updateInputValue={updateInputValue}
          />
        );
        break;
      case 2:
        return (
          <>
            <FloorInformationForm
              getValue={getValue}
              updateInputValue={updateInputValue}
            />
          </>
        );
        break;
      case 3:
        return (
          <>
            <UnitInformationForm
              getValue={getValue}
              updateInputValue={updateInputValue}
            />
          </>
        );
        break;
      case 4:
        return (
          <>
            <OwnerInformation
              getValue={getValue}
              updateInputValue={updateInputValue}
            />
          </>
        );
        break;
      default:
        break;
    }
  };

  const showProjectInfoOnTop = () => {
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 2:
        return (
          <>
            <PropertyInfoDisplay />
          </>
        );
        break;
      case 3:
        return (
          <>
            <PropertyInfoDisplay />
          </>
        );
        break;
      case 4:
        return (
          <>
            <PropertyInfoDisplay />
          </>
        );
        break;
      default:
        <PropertyInfoDisplay />;
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col tablet:flex-row justify-center gap-8 mt-4 px-5">
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <div className="w-96 h-64 bg-white flex justify-evenly rounded-2xl flex-col items-center ">
            <BsCheck className="text-green-500 bg-green-100 rounded-full text-5xl mt-4" />
            <h2 className="!text-xl !font-bold  ">Succesfully Added</h2>
            <p id="modal-modal-description">
              Property details has been added successfully
            </p>
            <button
              type="button"
              className="rounded-md bg-red-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-100"
              onClick={() => setOpen(false)}
            >
              Go Back
            </button>
          </div>
        </Modal>
        <div className="border-b border-gray-200 bg-[white] pr-4 py-5 w-[250px] shadow-md rounded-md h-[100%]">
          <AddPropertySteps currentFormIndex={currentFormIndex} />
        </div>

        <div className="w-full tablet:w-[50%] ">
          {showProjectInfoOnTop()}
          <div className="border-b border-gray-200 bg-[white] px-4 py-5 sm:px-6 shadow-md rounded-md ">
            <form>
              {showFormBasedOnId()}
              <div className="mt-6 flex items-center justify-between gap-x-6">
                <button
                  type="button"
                  className="rounded-md bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm hover:bg-red-100"
                  onClick={onSaveDraft}
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
                  <AppPopup
                    title="Property Added"
                    showPopup={popup}
                    setShowPopup={setPopup}
                    buttonTitle="Go To Property List"
                    onButtonClick={handleProperties}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPropertyPage;
