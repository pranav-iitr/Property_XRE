import PropertyHeader from "../components/property/PropertyHeader";
import AppliedFiltersBar from "../components/property/AppliedFiltersBar";
import PropertyListing from "../components/property/PropertyListing";
import PropertiesPagination from "../components/property/PropertiesPagination";
import { useEffect, useState } from "react";
import { getAllProjects } from "../utils/api";

const Properties = () => {
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
  const [value, setValue] = useState([0,10000]);
  const [page, setPage] = useState(1);
  const [projFilter, setProjFilter] = useState({
    label: "project",
    value: "project",
  })
  const [filter, setFilter] = useState("");
  const reset = () => {
    setfilterCity("");
    setfilterZone("");
    setfilterType("");
    setPage(1);
    setfilterLocation(null);
    setValue([0,10000]);
  };
  const Mount = async (page = 1, filters = "") => {
    await getAllProjects(page, filters).then((response) => {
      setMeta({
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        totalPages: response.data.total_pages,
        startIndex: response.data.start_index,
        endIndex: response.data.end_index,
        currentPage: response.data.current_page,
      });
      setCites(
        response?.data?.cities.map((city) => {
          return { label: city.city, value: city.city };
        })
      );

      setTypes(
        response.data.types.map((type) => {
          return { label: type, value: type };
        })
      );
      setZones(
        response.data.zones.map((zone) => {
          return { label: zone, value: zone };
        })
      );
      setProjects(response.data.results);
    }).catch((error) => {
      // check for 401
      if(error.response.status === 401){
        localStorage.clear();
        window.location.reload();
      }
      console.log(error);
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
    if(projFilter){
      filters += `&project=${projFilter.value}`;
    }
    filters += `&page=${page}`;
    filters += `&sort_by=${sort_by}`;
    setFilter(filters);
    Mount(1, filters);
  }, [filterZone, filterCity, filterType,filterLocation,sort_by,value,projFilter,page]);
  useEffect(() => {
    setPage(1);
  }, [filterZone, filterCity, filterType,filterLocation,sort_by,value,projFilter]);
  return (
    <div>
      <PropertyHeader
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
      <AppliedFiltersBar reset={reset} project={projFilter} 
      setProjFilter={setProjFilter}
       />
      <PropertyListing projects={projects} setSort_by={setSort_by}   />
      <PropertiesPagination meta={meta} Mount={Mount} setPage={setPage} page={page} />
    </div>
  );
};

export default Properties;
