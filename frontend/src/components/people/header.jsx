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



export default function PropertyHeader({ setPOpen, setPtype }) {

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
                    {"Contact"}
                  </h1>
                </div>
              </div>

              <div className="relative z-10 flex items-center tablet:hidden">
                {/* Mobile menu button */}
                {/* <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-red-900 px-2 py-1 text-sm font-light text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => navigate("/property/add-new")}
                >
                  Add New 
                </button>*/}
                <Disclosure.Button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700"
                >
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
                  onClick={() => {
                    setPOpen(true);
                    setPtype("add");
                  }}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
