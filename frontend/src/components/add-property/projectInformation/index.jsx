import { PhotoIcon } from "@heroicons/react/24/solid";
import AreaInputWithDropdown from "../../common/AreaInputWithDropdown";
import CustomInput from "../../common/CustomInput";
import CustomDropdown from "../../common/CustomDropdown";
import { useEffect, useState } from "react";
import { useMatchStore } from "../../../store/projectStore";
import { getOneProject } from "../../../utils/api";

import { GetState, GetCity } from "react-country-state-city";

import { useAtom } from "jotai/react";
import { photoAtom } from "../../../store/photo";

export default function ProjectInformation(props) {
  const { projectId } = useMatchStore();
  const { updateInputValue, getValue } = props;
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [photo, setPhoto] = useAtom(photoAtom);
  useEffect(() => {
    GetState(101).then((res) => {
      console.log(res);
      setStateOptions(
        res.map((state) => {
          return { title: state.name, value: state.name, id: state.id };
        })
      );
    });
  }, []);

  const type = "projectInformation";
  const propertyImage = getValue(type, "propertyImage");
  useEffect(() => {
    const unMount = async () => {
      await getOneProject(projectId).then((res) => {
        updateInputValue(
          res.data.data.attributes.Name,
          null,
          "projectInformation",
          "name"
        );
      });
    };
    if (projectId) {
      unMount();
    }
  }, []);
  return (
    <>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Project Information
          </h2>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <CustomInput
              title="Project-Name"
              type="text"
              name="name"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "name")}
            />

            <CustomInput
              title="Plot Number"
              type="text"
              name="plotNumber"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "plotNumber")}
            />

            <CustomInput
              title="Total Number Of Floors"
              type="number"
              name="totalFloors"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "totalFloors")}
            />

            <CustomInput
              title="Total Basements"
              type="number"
              name="totalBasements"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "totalBasements")}
            />

            <AreaInputWithDropdown
              title="Total Area"
              name="totalArea"
              placeholder="2540"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "totalArea")}
            />

            <AreaInputWithDropdown
              title="Vacant Area"
              name="vacantArea"
              placeholder="2540"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "vacantArea")}
            />

            {/* <AreaInputWithDropdown
              title="Occupied Area"
              name="occupiedArea"
              placeholder="2540"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "occupiedArea")}
            /> */}
            <CustomInput
              title="Maintenance Charges"
              type="number"
              name="maintenanceCharges"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "maintenanceCharges")}
            />
            <CustomDropdown
              title="Features"
              name="feature"
              options={[
                { title: "A Grade", value: "A Grade" },
                { title: "B Grade", value: "B Grade" },
                { title: "C Grade", value: "C Grade" },
              ]}
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "feature")}
            />

            <CustomInput
              title="Per Floor Size"
              type="number"
              name="perFloorSize"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "perFloorSize")}
            />

            <CustomDropdown
              title="Building Type"
              name="buildingType"
              options={[
                { title: "Commercial", value: "Commercial" },
                { title: "Residential", value: "Residential" },
                { title: "Industrial", value: "Industrial" },
                { title: "Agricultural", value: "Agricultural" },
                { title: "IT/ITES", value: "IT/ITES" },
                { title: "Institutional", value: "Institutional" },
                { title: "Hotel/Hospital", value: "Hotel/Hospital" },
                { title: "Warehouse", value: "Warehouse" },
                { title: "Land", value: "Land" },
                { title: "Other", value: "Other" },
              ]}
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "buildingType")}
            />

            <CustomDropdown
              title="Power Backup"
              name="powerBackup"
              options={[
                { title: "Yes", value: "yes" },
                { title: "No", value: "no" },
              ]}
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "powerBackup")}
            />

            <CustomDropdown
              title="Air Conditioning"
              name="airConditioning"
              options={[
                { title: "Yes", value: "yes" },
                { title: "No", value: "no" },
              ]}
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "airConditioning")}
            />

            <CustomDropdown
              title="States"
              name="state"
              options={stateOptions}
              inputProps={{
                onChange: (e) => {
                  updateInputValue(e.target.value, e, type);
                  console.log(e.target.value, e);
                  //get id from stateOptions
                  const Id = stateOptions.find(
                    (state) => state.value === e.target.value
                  ).id;
                  GetCity(101, Id).then((res) => {
                    console.log(res, e);
                    setCityOptions(
                      res.map((city) => {
                        return { title: city.name, value: city.name };
                      })
                    );
                  });
                },
              }}
              getValue={() => getValue(type, "state")}
            />

            <CustomDropdown
              title="City"
              name="city"
              options={cityOptions}
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "city")}
            />

            <CustomDropdown
              title="Sub Location"
              name="sub_location"
              options={[
                { title: "North", value: "North" },
                { title: "South", value: "South" },
                { title: "East", value: "East" },
                { title: "West", value: "West" },
                { title: "Central", value: "Central" },
                { title: "North-East", value: "North-East" },
                { title: "North-West", value: "North-West" },
                { title: "South-East", value: "South-East" },
                { title: "South-West", value: "South-West" },
                { title: "Other", value: "Other" },
              ]}
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "sub_location")}
            />

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span
                        onClick={() =>
                          document.getElementById("upload-file-input").click()
                        }
                        className="file-upload-btn"
                      >
                        Upload a file
                      </span>
                      <input
                        id="upload-file-input"
                        name="propertyImage"
                        type="file"
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          const url = URL.createObjectURL(file);
                          setPhoto({ ...photo, propertyImage: url });
                          updateInputValue(file, e, type);
                        }}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            {photo?.propertyImage ? (
              <div className="col-span-full justify-self-center">
                <img
                  src={photo?.propertyImage}
                  alt="UploadedImage"
                  className="w-40 h-40 "
                />
              </div>
            ) : (
              " "
            )}

            <div className="sm:col-span-6">
              <CustomInput
                title="Location"
                type="text"
                name="location"
                id="location"
                placeholder="www.example.com"
                inputProps={{
                  onChange: (e) => updateInputValue(e.target.value, e, type),
                }}
                value={() => getValue(type, "location")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
