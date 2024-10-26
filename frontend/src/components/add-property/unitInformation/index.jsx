import CustomInput from "../../common/CustomInput";
import CustomDropdown from "../../common/CustomDropdown";
import { useMatchStore } from "../../../store/projectStore";
import { useEffect } from "react";
import { getOneUnit } from "../../../utils/api";
import { photoAtom } from "../../../store/photo";
import { useAtom } from "jotai/react";
import { PhotoIcon } from "@heroicons/react/24/outline";

const UnitInformationForm = (props) => {
  const { unitId } = useMatchStore();
  const { updateInputValue, getValue } = props;
  const [photo, setPhoto] = useAtom(photoAtom);

  const type = "unitInformation";

  useEffect(() => {
    const unMount = async () => {
      const res = await getOneUnit(unitId);

      updateInputValue(
        res.data.data.attributes.unitArea,
        null,
        "unitInformation",
        "unitArea"
      );
      updateInputValue(
        res.data.data.attributes.unitNumber,
        null,
        "unitInformation",
        "unitNumber"
      );
      updateInputValue(
        res.data.data.attributes.numberOfParkings,
        null,
        "unitInformation",
        "noOfParkings"
      );
      updateInputValue(
        res.data.data.attributes.askingRental,
        null,
        "unitInformation",
        "askingRental"
      );
      updateInputValue(
        res.data.data.attributes.furnishingStatus,
        null,
        "unitInformation",
        "furnishingStatus"
      );
      updateInputValue(
        res.data.data.attributes.availabilityFor,
        null,
        "unitInformation",
        "availabilityFor"
      );
      updateInputValue(
        res.data.data.attributes.ageOfFurnishing,
        null,
        "unitInformation",
        "ageOfFurnishing"
      );
      updateInputValue(
        res.data.data.attributes.dateAvailable,
        null,
        "unitInformation",
        "dateAvailable"
      );
      
    };
    if (unitId) {
      unMount();
    }
  }, []);
  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Unit Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <CustomInput
            title="Unit Number"
            type="text"
            name="unitNumber"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "unitNumber")}
          />
          <CustomInput
            title="Unit Area"
            type="text"
            name="unitArea"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "unitArea")}
          />

          <CustomInput
            title="Asking Rental"
            type="text"
            name="askingRental"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "askingRental")}
          />
          <CustomInput
            title="No Of Parking's"
            type="text"
            name="noOfParkings"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "noOfParkings")}
          />
          <CustomDropdown
            title="Availability For"
            name="availabilityFor"
            options={[
              { title: "Lease", value: "lease" },
              { title: "Sale", value: "Sale" },
              { title: "Both", value: "Both" },
              { title: "None", value: "None" },
            ]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "availabilityFor")}
          />
          <CustomDropdown
            title="Furnishing Status"
            name="furnishingStatus"
            options={[
              { title: "Furnished", value: "Furnished" },
              { title: "Semi Furnished", value: "Semi Furnished" },
              { title: "Un Furnished", value: "Un Furnished" },
            ]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "furnishingStatus")}
          />
          <CustomInput
            title="Age Of Furnishing"
            type="text"
            name="ageOfFurnishing"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "ageOfFurnishing")}
          />
          <CustomInput
            title="Date of Availablity"
            type="date"
            name="dateAvailable"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "floorNumber")}
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
                    <span onClick={() => document.getElementById('upload-file-input').click()}
                      className="file-upload-btn">Upload a file</span>
                    <input
                      id="upload-file-input"
                      name="FloorImage"
                      type="file"

                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const url = URL.createObjectURL(file);
                        setPhoto({ ...photo, FloorImage: url });
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
          {photo?.FloorImage
            ?
            <div className="col-span-full justify-self-center">
              <img src={photo?.FloorImage} alt='UploadedImage' className="w-40 h-40 " />
            </div>
            :
            " "
          }
        </div>
      </div>
    </div>
  );
};

export default UnitInformationForm;
