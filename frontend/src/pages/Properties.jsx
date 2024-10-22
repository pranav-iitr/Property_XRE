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
  const [sub_locations, setSubLocations] = useState([]);
  const [owner, setOwner] = useState([]);
  const [filterOwner, setfilterOwner] = useState("");
  const [filterSubLocation, setfilterSubLocation] = useState("");
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
    setfilterSubLocation("");
    setfilterType("");
    setPage(1);
    setfilterLocation(null);
    setValue([0,10000]);
    setOwner([]);
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
      setSubLocations(
        response.data.sub_locations.map((sub_location) => {
          return { label: sub_location, value: sub_location };
        })
      );

      setOwner(
        response.data.owners.map((owner) => {
          return { label: owner, value: owner };
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
    if (filterSubLocation) {
      filters += `&sub_location=${filterSubLocation}`;
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
    if (filterOwner) {
      filters += `&owner=${filterOwner}`;
    }
    filters += `&page=${page}`;
    filters += `&sort_by=${sort_by}`;
    setFilter(filters);
    Mount(1, filters);
  }, [filterSubLocation, filterCity, filterType,filterLocation,sort_by,value,projFilter,page,filterOwner]);
  useEffect(() => {
    setPage(1);
  }, [filterSubLocation, filterCity, filterType,filterLocation,sort_by,value,projFilter,filterOwner]);
  return (
    <div>
      <PropertyHeader
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
        setfilterLocation={setfilterLocation}
        filterLocation={filterLocation}
        owner={owner}
        setfilterOwner={setfilterOwner}
        
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
