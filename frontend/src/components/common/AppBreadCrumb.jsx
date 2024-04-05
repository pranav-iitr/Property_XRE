"use client";
import { HomeIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AppBreadCrumb() {
  const [breadCrumbList, setBreadCrumbList] = useState([]);
  const navigate = useNavigate();
  const getTitle = (input) => {
    let words = input
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(" ");
  };

  useEffect(() => {
    const slug = window.location.pathname;
    const params = slug.split("/");
    let href = "";
    const data = params
      .filter((item) => item !== "")
      .map((item) => {
        href += `/${item}`;
        return {
          name: getTitle(item),
          href: href,
          current: slug.includes(item),
        };
      });
    setBreadCrumbList(data);
  }, [navigate]);

  return (
    <nav
      className="flex border-b border-gray-200 bg-white"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
      >
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {breadCrumbList.map((page, index) => {
          return (
            <li key={index} className="flex">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <Link to={page.href} className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {page.name}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
