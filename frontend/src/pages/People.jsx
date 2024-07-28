import Header from "../components/people/header";
import AppliedFiltersBar from "../components/property/AppliedFiltersBar";
import Listing from "../components/people/listing";
import PropertiesPagination from "../components/property/PropertiesPagination";
import { useEffect, useState } from "react";
import { getPersons } from "../utils/api";

const People = () => {
  const [meta, setMeta] = useState({});
  const [projects, setProjects] = useState([]);
  const [types, setTypes] = useState([]);
  const [cites, setCites] = useState([]);
  const [zones, setZones] = useState([]);
  const [filterZone, setfilterZone] = useState("");
  const [filterCity, setfilterCity] = useState("");
  const [filterType, setfilterType] = useState("");
  const [filterLocation, setfilterLocation] = useState("");
  const [sort_by, setSort_by] = useState("id");
  const [value, setValue] = useState([0, 10000]);
  const [projFilter, setProjFilter] = useState({
    label: "project",
    value: "project",
  });
  const [filter, setFilter] = useState("");
  const reset = () => {
    setfilterCity("");
    setfilterZone("");
    setfilterType("");
    setfilterLocation(null);
    setValue([0, 10000]);
  };
  const Mount = async (page = 1, filters = "") => {
    await getPersons().then((response) => {
      console.log(response);
      setProjects(response?.data?.results);
    });
  };
  // useEffect(() => {
  //   Mount();
  // }, []);
  useEffect(() => {
    let filters = "";
    if (filterCity) {
      filters += `&city=${filterCity}`;
    }
    if (filterZone) {
      filters += `&zone=${filterZone}`;
    }
    if (filterType) {
      filters += `&type=${filterType}`;
    }
    if (filterLocation) {
      filters += `&location=${filterLocation}`;
    }
    if (value) {
      filters += `&min_price=${value[0]}&max_price=${value[1]}`;
    }
    if (projFilter) {
      filters += `&project=${projFilter.value}`;
    }
    filters += `&sort_by=${sort_by}`;
    setFilter(filters);
    Mount(1, filters);
  }, [
    filterZone,
    filterCity,
    filterType,
    filterLocation,
    sort_by,
    value,
    projFilter,
  ]);
  return (
    <div>
      <Header
        cites={cites}
        types={types}
        zones={zones}
        projFilter={projFilter}
        value={value}
        setValue={setValue}
        setProjFilter={setProjFilter}
        setfilterCity={setfilterCity}
        setfilterZone={setfilterZone}
        setfilterType={setfilterType}
        setfilterLocation={setfilterLocation}
        filterLocation={filterLocation}
      />
      <AppliedFiltersBar
        reset={reset}
        project={projFilter}
        setProjFilter={setProjFilter}
      />
      <Listing projects={projects} setProjects={setProjects} setSort_by={setSort_by} />
      <PropertiesPagination meta={meta} Mount={Mount} />
    </div>
  );
};

export default People;
