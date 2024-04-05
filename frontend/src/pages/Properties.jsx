import PropertyHeader from '../components/property/PropertyHeader'
import AppliedFiltersBar from '../components/property/AppliedFiltersBar'
import PropertyListing from '../components/property/PropertyListing'
import PropertiesPagination from '../components/property/PropertiesPagination'

const Properties = () => {
  return (
    <div>
      <PropertyHeader />
      <AppliedFiltersBar />
      <PropertyListing />
      <PropertiesPagination />
    </div>
  )
}

export default Properties;
