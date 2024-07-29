import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPaginate from "react-paginate";
export default function PropertiesPagination({ meta, Mount,setPage,page }) {
  return (
    <div className=" lg:mx-6 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{meta?.startIndex}</span> to{" "}
            <span className="font-medium">{meta.endIndex}</span> of{" "}
            <span className="font-medium">{meta?.count}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <div
              onClick={() => {
                meta.previous !== null
                  ? setPage(page - 1)
                  : alert("No more pages");
              }}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            {1 != meta?.currentPage && (
              <a
                onClick={() => {
                  setPage(1);
                }
                }
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {1}
              </a>
            )}
            {meta?.currentPage - 1 > 1 && (
              <>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  onClick={() => {
                    setPage(meta?.currentPage - 1);

                  }
                  }
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  {meta?.currentPage - 1}
                </a>
              </>
            )}

            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 "
            >
              {meta?.currentPage}
            </a>

            {meta?.currentPage + 1 < meta?.totalPages && (
              <>
                <a
                  onClick={
                    () => {
                      setPage(meta?.currentPage + 1);
                    }
                  }
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  {meta?.currentPage + 1}
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
              </>
            )}

            {meta?.totalPages > meta?.currentPage && (
              <a
                onClick={
                  () => {
                    setPage(meta?.totalPages);
                  }
                }
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {meta?.totalPages}
              </a>
            )}
            <div
              href="#"
              onClick={() => {
                meta.next !== null
                  ? setPage(page + 1)
                  : alert("No more pages");
              }}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
