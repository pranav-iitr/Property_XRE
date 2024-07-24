import { PhotoIcon } from "@heroicons/react/24/outline";
import CustomInput from "../../common/CustomInput";
import { useMatchStore } from "../../../store/projectStore";
import { getOneFloor } from "../../../utils/api";
import { useEffect } from "react";
import { useAtom } from "jotai/react";
import { photoAtom } from "../../../store/photo";
const FloorInformationForm = (props) => {
  const { floorId } = useMatchStore();
  const [photo, setPhoto] = useAtom(photoAtom);
  const { updateInputValue, getValue } = props;
  const type = "floorInformation";
  const FloorImage = getValue(type, "FloorImage")
  useEffect(() => {
    const unMount = async () => {
      const res = await getOneFloor(floorId);
   
      updateInputValue(res.data.data.attributes.floorNumber, null, "floorInformation", 'floorNumber');
      updateInputValue(res.data.data.attributes.floorArea, null, "floorInformation", 'floorArea');
      updateInputValue(res.data.data.attributes.totalUnitsInFloor, null, "floorInformation", 'totalUnits');
      updateInputValue(res.data.data.attributes.numberAvailableUnits, null, "floorInformation", 'unitsAvailable');
    }
    if (floorId) {
      unMount();
    }
  }, [])
  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Floor Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <CustomInput
            title="Floor Number"
            type="text"
            name="floorNumber"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "floorNumber")}
          />
          <CustomInput
            title="Total Units"
            type="text"
            name="totalUnits"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "totalUnits")}
          />
          <CustomInput
            title="Units Available"
            type="text"
            name="unitsAvailable"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "unitsAvailable")}
          />
          <CustomInput
            title="Floor Area"
            type="text"
            name="floorArea"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "floorArea")}
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

export default FloorInformationForm;
