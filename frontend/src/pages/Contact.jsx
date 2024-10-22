import Header from "../components/people/header";
import AppliedFiltersBar from "../components/property/AppliedFiltersBar";
import Listing from "../components/people/listing";
import PropertiesPagination from "../components/property/PropertiesPagination";
import { useEffect, useState } from "react";
import { getPersons } from "../utils/api";

const People = () => {
  const [meta, setMeta] = useState({});
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [types, setTypes] = useState("");
  const [page, setPage] = useState(1);

  const [sort_by, setSort_by] = useState("id");
  const [projFilter, setProjFilter] = useState({
    label: "project",
    value: "project",
  });
  const [filter, setFilter] = useState("");
  const reset = () => {};
  const Mount = async (page = 1, filters = "") => {
    await getPersons(page).then((response) => {
      console.log(response);
      setProjects(response?.data?.results);
      setMeta({
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        totalPages: response.data.total_pages,
        startIndex: response.data.start_index,
        endIndex: response.data.end_index,
        currentPage: response.data.current_page,
      });
    });
  };
  // useEffect(() => {
  //   Mount();
  // }, []);
  useEffect(() => {
  
    Mount(page);
  }, [page]);
  return (
    <div>
      <Header setPOpen={setOpen} setPtype={setTypes} />
      <AppliedFiltersBar
        reset={reset}
        project={projFilter}
        setProjFilter={setProjFilter}
      />
      <Listing
        projects={projects}
        setProjects={setProjects}
        setSort_by={setSort_by}
        setOpen={setOpen}
        open={open}
        setTypes={setTypes}
        types={types}
      />
      <PropertiesPagination meta={meta} Mount={Mount} setPage={setPage} page={page} />
    </div>
  );
};

export default People;
