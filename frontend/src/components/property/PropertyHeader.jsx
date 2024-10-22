import { Disclosure } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Slider from "@mui/material/Slider";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { useState } from "react";
import { MenuButton as BaseMenuButton, MenuButton } from "@mui/base/MenuButton";
import {
  MenuItem as BaseMenuItem,
  MenuItem,
  menuItemClasses,
} from "@mui/base/MenuItem";
import { Drawer } from "@mui/material";
export const handleSearchFilter = (
  value,
  setFileteredPropertyList,
  allPropertyList
) => {
  if (value === "all") {
    setFileteredPropertyList(allPropertyList);
    return;
  }
  const filtered = allPropertyList.filter((item) => {
    const location = `${item.sub_location} ${item.city} ${item.states}`.toLowerCase();
    return location.includes(value.toLowerCase());
  });

  setFileteredPropertyList(filtered);
};

const project = [
  {
    label: "Project",
    value: "Project",
  },
  {
    label: "unit",
    value: "unit",
  },
];

const FiltersBar = ({
  cites,
  types,
  sub_locations,
  projFilter,
  value,
  owner,
  setfilterOwner,
  setValue,
  setProjFilter,
  setfilterCity,
  setfilterSubLocation,
  setfilterType,

}) => {
  // const [show, setShow] = useState(false);
  // const [value, setValue] = useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tablet:pt-6 px-4 tablet:pb-2 flex flex-col tablet:flex-row  justify-between">
      <div className="flex flex-col tablet:flex-row  gap-3 items-center">
        <p className="text-lg font-bold text-gray-900">Filters</p>
        <p className="hidden tablet:block text-gray-500">|</p>
        <div className="flex  items-center gap-2 text-gray-500">
          <Select
            options={types}
            placeholder="Type"
            onChange={(e) => {
              setfilterType(e.value);
            }}
            classNames={{
              container: () =>
                " w-full !z-10 !border-none self-stretch rounded-lg  ",
              indicatorSeparator: () => "hidden",
              control: () => "!border-none",
              menuList: () => "!w-36 !z-10",
              menu: () => "!w-36 !z-50",
              menuPortal: () => "!w-36 !z-10",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col tablet:flex-row mt-5 tablet:mt-0 gap-6 text-gray-500">
      <div className="flex items-center gap-2">
  
          <Select
            options={owner}
            placeholder="owners"
            onChange={(e) => {
              setfilterOwner(e.value);
            }}
            classNames={{
              container: () =>
                " w-full z-0 tablet:!z-10 !border-none self-stretch rounded-lg  ",
              indicatorSeparator: () => "hidden",
              control: () => "!border-none",
              menuList: () => "!w-36 tablet:!z-10",
              menu: () => "!w-36 !z-[50]",
              menuPortal: () => "!w-36 !z-[10]",
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Select
            options={project}
            placeholder="Projects"
            onChange={(e) => {
              setProjFilter(e);
            }}
            value={projFilter}
            classNames={{
              container: () =>
                " w-full z-0 tablet:!z-10 !border-none self-stretch rounded-lg  ",
              indicatorSeparator: () => "hidden",
              control: () => "!border-none",
              menuList: () => "!w-36 !z-10",
              menu: () => "!w-36 !z-[50]",
              menuPortal: () => "!w-36 !z-10",
            }}
          />
        </div>
        <div
         
          className="hidden tablet:flex items-center gap-2"
        >
          {/* <p>Price Range</p>
          <ChevronDownIcon className="w-5 h-5" /> */}
          <Dropdown>
            <MenuButton className="flex items-center gap-2">
              <p>Price Range</p>
              <ChevronDownIcon className="w-5 h-5" />
            </MenuButton>
            <Menu className="bg-white border">
              <MenuItem className="w-28 px-4 flex items-center ">
                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={11000}
                />
              </MenuItem>
            </Menu>
          </Dropdown>
          
        </div>
        <div
         
          className="tablet:hidden flex flex-col  items-center gap-2"
        >
          
          
              <p>Price Range</p>
             
                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={11000}
                />
              
        </div>
        <div className="flex items-center gap-2">
          {/* <p>Type</p>
              <ChevronDownIcon className="w-5 h-5" /> */}
          <Select
            options={cites}
            placeholder="city"
            onChange={(e) => {
              setfilterCity(e.value);
            }}
            classNames={{
              container: () =>
                " w-full z-0 tablet:!z-10 !border-none self-stretch rounded-lg  ",
              indicatorSeparator: () => "hidden",
              control: () => "!border-none",
              menuList: () => "!w-36 tablet:!z-10",
              menu: () => "!w-36 !z-[50]",
              menuPortal: () => "!w-36 !z-[10]",
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Select
            options={sub_locations}
            placeholder="sub_location"
            classNames={{
              container: () =>
                " w-full z-0 tablet:!z-10 !border-none self-stretch rounded-lg  ",
              indicatorSeparator: () => "hidden",
              control: () => "!border-none",
              menuList: () => "!w-36 !z-10",
              menu: () => "!w-36 !z-50",
              menuPortal: () => "!w-36 !z-10",
            }}
            onChange={(e) => {
              setfilterSubLocation(e.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const SearchInput = ({ setfilterLocation, filterLocation }) => {
  return (
    <div className="w-full sm:max-w-md">
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center border-r-2">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="state"
            name="state"
            autoComplete="state"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option value={"all"}>{"All"}</option>
          </select>
        </div>
        <input
          type="text"
          name="location"
          id="location"
          className="block w-full rounded-md border-0 py-1.5 pl-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search location"
          value={filterLocation}
          onChange={(e) => {
            setfilterLocation(e.target.value);
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default function PropertyHeader({
  cites,
  types,
  sub_locations,
  projFilter,
  value,
  setValue,
  setProjFilter,
  setfilterCity,
  setfilterSubLocation,
  setfilterType,
  setfilterLocation,
  filterLocation,
}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <Disclosure as="header" className="border-b px-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-100 tablet:divide-y  tablet:divide-gray-200 px-4">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 tablet:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="truncate text-2xl font-bold text-gray-900">
                    {"Projects"}
                  </h1>
                </div>
              </div>
              <div className="relative z-0 hidden tablet:flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <SearchInput
                  setfilterLocation={setfilterLocation}
                  filterLocation={filterLocation}
                />
              </div>
              <div className="relative z-10 flex items-center tablet:hidden">
                {/* Mobile menu button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-red-900 px-2 py-1 text-sm font-light text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => navigate("/property/add-new")}
                >
                  Add New
                </button>
                <Disclosure.Button onClick={()=>{setShow(!show)}} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700">
                  <span className="sr-only">Open menu</span>
                  {show ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden tablet:relative tablet:z-10 tablet:ml-4 tablet:flex tablet:items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-red-900 px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => navigate("/property/add-new")}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
          <Drawer
            className=" w-[50vw] tablet:hidden"
            sx={{ "& .MuiDrawer-paper": { width: "90vw",paddingTop:"5vw" } }}
            open={show}
            onClose={() => {
              setShow(false);
            }}
          >
            <FiltersBar
              cites={cites}
              types={types}
              sub_locations={sub_locations}
              projFilter={projFilter}
              value={value}
              setValue={setValue}
              setProjFilter={setProjFilter}
              setfilterCity={setfilterCity}
              setfilterSubLocation={setfilterSubLocation}
              setfilterType={setfilterType}
            />
          </Drawer>
          <div className="hidden tablet:block">
            <FiltersBar
              cites={cites}
              types={types}
              sub_locations={sub_locations}
              projFilter={projFilter}
              value={value}
              setValue={setValue}
              setProjFilter={setProjFilter}
              setfilterCity={setfilterCity}
              setfilterSubLocation={setfilterSubLocation}
              setfilterType={setfilterType}
            />
          </div>
        </>
      )}
    </Disclosure>
  );
}
