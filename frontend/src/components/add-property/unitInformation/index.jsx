import CustomInput from "../../common/CustomInput";
import CustomDropdown from "../../common/CustomDropdown";
import { useMatchStore } from "../../../store/projectStore";
import { useEffect } from "react";
import { getOneUnit } from "../../../utils/api";

const UnitInformationForm = (props) => {
  const { unitId } = useMatchStore();
  const { updateInputValue, getValue } = props;
  const type = "unitInformation";

  useEffect(() => {
    const unMount = async () => {
      const res = await getOneUnit(unitId);

      updateInputValue(res.data.data.attributes.unitArea, null, "unitInformation", 'unitArea')
      updateInputValue(res.data.data.attributes.unitNumber, null, "unitInformation", 'unitNumber')
      updateInputValue(res.data.data.attributes.numberOfParkings, null, "unitInformation", 'noOfParkings')
      updateInputValue(res.data.data.attributes.askingRental, null, "unitInformation", 'askingRental')
      updateInputValue(res.data.data.attributes.furnishingStatus, null, "unitInformation", 'furnishingStatus')
      updateInputValue(res.data.data.attributes.availabilityFor, null, "unitInformation", 'availabilityFor')


    }
    if (unitId) {
      unMount();
    }
  }, [])
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
            options={[{ title: "Lease", value: "lease" }]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "availabilityFor")}
          />
          <CustomDropdown
            title="Furnishing Status"
            name="furnishingStatus"
            options={[{ title: "Furnished", value: "Furnished" }, { title: "Semi Furnished", value: "Semi Furnished" }, { title: "Un Furnished", value: "Un Furnished" }]}
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
        </div>
      </div>
    </div>
  );
};

export default UnitInformationForm;
