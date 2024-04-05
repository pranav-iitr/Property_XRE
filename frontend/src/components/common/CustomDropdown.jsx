const CustomDropdown = (props) => {
    const { title, name, options, inputProps, getValue, defaultValue } = props
    return (
        <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                {title}
            </label>
            <div className="mt-2">
                <select

                    name={name}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={getValue?.(name)}
                    {...inputProps}
                >
                    <option value={defaultValue ? defaultValue : 0}>Select</option>
                    {options.map((item) => {
                        return <option key={item.value} value={item.value}>{item.title}</option>
                    })}
                    {/* <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option> */}
                </select>
            </div>
        </div>
    )
}

export default CustomDropdown