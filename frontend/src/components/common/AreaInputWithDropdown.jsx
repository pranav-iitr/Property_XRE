const AreaInputWithDropdown = (props) => {
  const { title, name, placeholder, inputProps, getValue } = props;
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          value={getValue?.(name)}
          {...inputProps}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="unit" className="sr-only">
            Unit
          </label>
          <select
            id="unit"
            name="unit"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={getValue?.(name)}
            {...inputProps}
          >
            {[
              { title: "SQ FT", value: "SQ FT" },
              // { title: "SQ YD", value: "SQ YD" },
              // { title: "SQ M", value: "SQ M" },
              // { title: "ACRE", value: "ACRE" },
              // { title: "HECTARE", value: "HECTARE" },
            ].map((unit) => (
                <option key={unit.value} value={unit.value}>
                {unit.title}
              </option>
            ))}

            {/* <option value="sq_feet">Sq Ft</option> */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AreaInputWithDropdown;
