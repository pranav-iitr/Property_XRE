import AppHeader from '../components/AppHeader'
import AppBreadCrumb from '../components/AppBreadCrumb'
import PropertyHeader from '../components/PropertyHeader'
import AppliedFiltersBar from '../components/AppliedFiltersBar'
import PropertyListing from '../components/PropertyListing'
import PropertiesPagination from '../components/PropertiesPagination'

const Properties = () => {
  return (
    <div>
      <AppHeader />
      <AppBreadCrumb />
      <PropertyHeader />
      <AppliedFiltersBar />
      <PropertyListing />
      <PropertiesPagination />
    </div>
  )
}

export default Properties;
