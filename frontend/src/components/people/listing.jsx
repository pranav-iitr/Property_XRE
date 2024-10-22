import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import React from "react";
import { deletePerson, updatePerson, sendPersonInfo } from "../../utils/api";
// import OwnerInformation from "../add-property/ownerInformation";
import { Modal } from "@mui/material";
import { getProjectChoices, getUnitChoices } from "../../utils/api";
import AreaInputWithDropdown from "../common/AreaInputWithDropdown";
import CustomInput from "../common/CustomInput";
import CustomDropdown from "../common/CustomDropdown";
import toast from "react-hot-toast";
import {
  XMarkIcon
} from "@heroicons/react/24/outline";
export default function Listing({
  projects,
  setProjects,
  setSort_by,
  open,
  setOpen,
  types,
  setTypes,
}) {
  const [id, setId] = useState(true);
  const [type, setType] = useState(false);
  const [title, setTitle] = useState(false);
  const [units, setUnits] = useState([]);
  const [un_id, setUn_id] = useState(0);
  // const [] = useState(false);
  const handleClose = () => setOpen(false);
  const [props, setProps] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setSort_by(id ? "id" : "-id");
  }, [id]);
  useEffect(() => {
    setSort_by(type ? "type" : "-type");
  }, [type]);
  useEffect(() => {
    setSort_by(title ? "title" : "-title");
  }, [title]);
  useEffect(() => {
    console.log(types);
    if (types === "add") {
      getProjectChoices().then((response) => {
        console.log(response);
        setProps(
          response?.data?.map((project) => {
            return { title: project.title, value: project.id };
          })
        );
      });
    }
    console.log(props);
  }, [types]);

  useEffect(() => {
    if (formData?.p_id) {
      getUnitChoices(formData?.p_id).then((response) => {
        console.log(response);
        setUnits(
          response?.data?.map((unit) => {
            return { title: unit.unit_no, value: unit.id };
          })
        );
      });
    }
  }, [formData?.p_id]);

  const handleDelete = async (id) => {
    const response = await deletePerson(id)
      .then((res) => {
        console.log(res);
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 lg:mb-6">
      {/* <Modal open={open} onClose={() => setOpen(false)}>
        {/* <OwnerInformation /> 
      </Modal> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          
          <div className=" w-full h-full flex justify-center items-center  space-y-12">
            <div className="w-[80vw] bg-white border-b border-gray-900/10 p-12">
            <div className="flex justify-end">
            <button
              onClick={handleClose}
              type="button"
              class="inline-flex items-center justify-center rounded-md bg text-sm font-light shadow-sm "
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            
            </button>
          </div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Owner Information
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <CustomInput
                  title="Owner Name"
                  type="text"
                  name="name"
                  inputProps={{
                    onChange: (e) =>
                      setFormData({ ...formData, name: e.target.value }),
                  }}
                  getValue={() => formData?.name}
                />
                <CustomInput
                  title="Owner Email"
                  type="email"
                  name="email"
                  inputProps={{
                    onChange: (e) =>
                      setFormData({ ...formData, email: e.target.value }),
                  }}
                  getValue={() => formData?.email}
                />
                <CustomInput
                  title="Owner Mobile Number"
                  type="number"
                  name="mobileNumber"
                  inputProps={{
                    onChange: (e) =>
                      setFormData({
                        ...formData,
                        mobileNumber: e.target.value,
                      }),
                  }}
                  getValue={() => formData?.mobileNumber}
                />
                <CustomInput
                  title="Concerned Person (SPOC)"
                  type="text"
                  name="concernedPerson"
                  inputProps={{
                    onChange: (e) =>
                      setFormData({
                        ...formData,
                        concernedPerson: e.target.value,
                      }),
                  }}
                  getValue={() => formData?.concernedPerson}
                />
                
              </div>
              {types === "add" && (
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <CustomDropdown
                    title="Property"
                    name="p_id"
                    options={props}
                    inputProps={{
                      onChange: (e) => {
                        console.log("check", e.target.value);
                        setFormData({ ...formData, p_id: e.target.value });
                      },
                    }}
                    getValue={() => formData?.p_id}
                  />
                  <CustomDropdown
                    title="Unit"
                    name="unit"
                    options={units}
                    inputProps={{
                      onChange: (e) => setUn_id(e.target.value),
                    }}
                    getValue={() => un_id}
                  />
                </div>
              )}
              <button
                onClick={() => {
                  const data = {
                    name: formData?.name,
                    email: formData?.email,
                    phone: formData?.mobileNumber,
                    spoc: formData?.concernedPerson,
                    cam_charges: formData?.cmCharges,
                    vacating_area: formData?.vacantArea,
                    spoc: formData?.concernedPerson,
                    property: formData?.p_id,
                  };
                  if (types === "add") {
                    data["unit"] = un_id;
                    sendPersonInfo(data)
                      .then((res) => {
                        console.log(res);
                        toast.success("Owner Added Successfully");
                        setOpen(false);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                    updatePerson(id, data)
                      .then((res) => {
                        console.log(res);
                        setProjects(
                          projects.map((project) =>
                            project.id === id
                              ? { ...project, ...data }
                              : project
                          )
                        );
                        setOpen(false);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                }}
                type="button"
                class="inline-flex mt-5 items-center justify-center rounded-md bg-red-900 px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                save
              </button>
            </div>
          </div>
        </>
      </Modal>
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-[350px] [&::-webkit-scrollbar]:hidden">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 px-2">
            <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full z-1 divide-y divide-gray-300">
                <thead className="bg-gray-50 sticky top-0 z-1">
                  <tr className="hidden tablet:table-row">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500 sm:pl-6"
                    >
                      <div
                        onClick={() => {
                          setId(!id);
                          setTitle(false);
                          setType(false);
                        }}
                        className="flex gap-2 items-center"
                      >
                        <p>ID’s</p>
                        <ArrowUpIcon
                          className={`w-5 h-5 ${
                            id ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-medium text-gray-500 flex justify-center"
                    >
                      <div
                        onClick={() => {
                          setType(!type);
                          setId(false);
                          setTitle(false);
                        }}
                        className="flex gap-2 items-center"
                      >
                        <p>NAME</p>
                        <ArrowUpIcon
                          className={`w-5 h-5 ${
                            type ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      <div
                        onClick={() => {
                          setTitle(!title);
                          setId(false);
                          setType(false);
                        }}
                        className="flex gap-2"
                      >
                        <p>EMAIL</p>
                        <ArrowUpIcon
                          className={`w-5 h-5 ${
                            title ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      PHONE
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      PROPERTY
                    </th>
                    
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-medium text-gray-500 text-center"
                    >
                      CAM CHARGES
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {console.log(projects)}
                  {projects?.length ? (
                    projects.map((property) => (
                      <React.Fragment key={property?.id}>
                        <tr className="block tablet:table-row">
                          <td className="hidden tablet:table-cell whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
                            {property?.id}
                          </td>
                          <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                            {property?.name}
                          </td>
                          <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {property?.email}
                          </td>
                          <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {property?.phone}
                          </td>
                          <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {property?.property}
                          </td>
                          
                          <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                            {property?.cam_charges}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium">
                            <button
                              onClick={() => {
                                setOpen(true);
                                setId(property?.id);
                                setFormData({
                                  name: property?.name,
                                  email: property?.email,
                                  mobileNumber: property?.phone,
                                  concernedPerson: property?.concerned_person,
                                  cmCharges: property?.cam_charges,
                                  vacantArea: property?.vacating_area,
                                  concernedPerson: property?.spoc,
                                  p_id: property?.property_id,
                                });
                              }}
                              type="button"
                              class="inline-flex items-center justify-center rounded-md bg-red-900 px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Edit
                            </button>
                          </td>
                          <td className="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium">
                            <button
                              type="button"
                              class="inline-flex items-center justify-center rounded-md bg-red-900 px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              onClick={() => handleDelete(property?.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr className="tablet:hidden">
                          <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
                            ID’s
                          </td>
                          <td className="py-2 px-3 text-sm text-gray-500">
                            {property?.id}
                          </td>
                        </tr>
                        <tr className="tablet:hidden">
                          <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
                            TYPE
                          </td>
                          <td className="py-2 px-3 text-sm text-gray-500">
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-1.5 rounded-3xl bg-red-100 px-3 py-1 text-sm font-semibold text-red-800"
                            >
                              {property?.type}
                            </button>
                          </td>
                        </tr>
                        <tr className="tablet:hidden">
                          <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
                            PROPERTY NAME
                          </td>
                          <td className="py-2 px-3 text-sm text-gray-500">
                            {property?.title}
                          </td>
                        </tr>
                        <tr className="tablet:hidden">
                          <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
                            LOCATION
                          </td>
                          <td className="py-2 px-3 text-sm text-gray-500">
                            {property?.location}
                          </td>
                        </tr>
                        <tr className="tablet:hidden">
                          <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
                            AVAILABLE AREA
                          </td>
                          <td className="py-2 px-3 text-sm text-gray-500">
                            {property?.toatal_area}
                          </td>
                        </tr>
                        <tr className="tablet:hidden">
                          <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
                            OCCUPIED
                          </td>
                          <td className="py-2 px-3 text-sm text-gray-500">
                            {property?.occupied_area}
                          </td>
                        </tr>
                        <tr className="tablet:hidden">
                          <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
                            STATUS
                          </td>
                          <td className="py-2 px-3 text-sm text-gray-500">
                            <button
                              type="button"
                              className={`inline-flex items-center gap-x-1.5 rounded-3xl px-3 py-1 text-sm font-semibold ${
                                property?.status === "Approved"
                                  ? "bg-green-100 text-green-800"
                                  : property?.status === "Drafts"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : property?.status === "Rejected"
                                  ? "bg-red-100 text-red-800"
                                  : " bg-yellow-100"
                              }`}
                            >
                              {property?.status}
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))
                  ) : (
                    <div className="py-3 flex justify-center">
                      <h1 className="text-3xl font-bold">No Match Found</h1>
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
