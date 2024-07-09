import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

export default function PropertyListing({ projects, setSort_by }) {
  const [id, setId] = useState(true);
  const [type, setType] = useState(false);
  const [title, setTitle] = useState(false);
  useEffect(() => {
    setSort_by(id ? "id" : "-id");
  }, [id]);
  useEffect(() => {
    setSort_by(type ? "type" : "-type");
  }, [type]);
  useEffect(() => {
    setSort_by(title ? "title" : "-title");
  }, [title]);
  return (
    <div className="px-4 sm:px-6 lg:px-8 lg:mb-6">
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-[350px] [&::-webkit-scrollbar]:hidden">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full z-1 divide-y divide-gray-300">
                <thead className="bg-gray-50  sticky top-0 z-1">
                  <tr>
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
                          } `}
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
                        <p>TYPE</p>
                        <ArrowUpIcon
                          className={`w-5 h-5 ${
                            type ? "rotate-0" : "rotate-180"
                          } `}
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
                        <p>PROPERTY NAME</p>
                        <ArrowUpIcon
                          className={`w-5 h-5 ${
                            title ? "rotate-0" : "rotate-180"
                          } `}
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      LOCATION
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      AVAILABLE AREA
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      OCCUPIED
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-medium text-gray-500 text-center"
                    >
                      STATUS
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
                  {projects.length ? (
                    projects.map((property) => (
                      <tr key={property.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
                          {property.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                          <button
                            type="button"
                            className="inline-flex  items-center gap-x-1.5 rounded-3xl bg-red-100 px-3 py-1 text-sm font-semibold text-red-800"
                          >
                            {property.type}
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {property.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {property.location}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {property.toatal_area}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {property.occupied_area}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                          <button
                            type="button"
                            className={`inline-flex items-center gap-x-1.5 rounded-3xl px-3 py-1 text-sm font-semibold ${
                              property.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : property.status === "Drafts"
                                ? "bg-yellow-100 text-yellow-800"
                                : property.status === "Rejected"
                                ? "bg-red-100 text-red-800"
                                : " bg-yellow-100"
                            }`}
                          >
                            {property.status}
                          </button>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          {/* <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                            <span className="sr-only">, {property.name}</span>
                          </a> */}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div className="py-3  flex justify-center">
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
