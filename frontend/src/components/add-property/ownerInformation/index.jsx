import AreaInputWithDropdown from "../../common/AreaInputWithDropdown";
import CustomInput from "../../common/CustomInput";

export default function OwnerInformation(props) {
  const { updateInputValue, getValue } = props;
  const type = "ownerInformation";
  return (
    <>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Owner Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <CustomInput
              title="Owner Name"
              type="text"
              name="name"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "name")}
            />
            <CustomInput
              title="Owner Email"
              type="email"
              name="email"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "email")}
            />
            <CustomInput
              title="Owner Mobile Number"
              type="number"
              name="mobileNumber"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "mobileNumber")}
            />
            <CustomInput
              title="Concerned Person (SPOC)"
              type="text"
              name="concernedPerson"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "concernedPerson")}
            />
            <AreaInputWithDropdown
              title="CAM Charges (Sq feet)"
              name="cmCharges"
              placeholder="2540"
              inputProps={{
                onChange: (e) => updateInputValue(e.target.value, e, type),
              }}
              getValue={() => getValue(type, "cmCharges")}
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
          </div>
        </div>
      </div>
    </>
  );
}
