import { useAtom } from "jotai/react";
import { photoAtom } from "../../store/photo";
const PropertyInfoDisplay = () => {
  const [photo] = useAtom(photoAtom);

  const newPropertyInfo = JSON.parse(localStorage.getItem('newEntry'));

  return (
    <div className='p-6 mb-4 flex justify-between items-center md:shadow-xl rounded-md'>
      <div className='flex gap-4'>
        <div>
          <img src={photo?.propertyImage} className='w-[100px] h-[80px]' alt='property'/>
        </div>
        <div className='flex flex-col gap-2'>
          <div>
            <button type="button" className="inline-flex  items-center gap-x-1.5 rounded-3xl bg-red-100 px-2 py-1 text-xs font-semibold text-red-800">
              {newPropertyInfo?.projectInformation?.buildingType}
            </button>
          </div>
          <div>
            <h2 className='font-bold text-gray-900 text-lg'>{newPropertyInfo?.projectInformation?.name}</h2>
          </div>
          <div>
            <p className='text-gray-400 text-sm'>
              {newPropertyInfo?.projectInformation?.location}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button type="button" className="inline-flex  items-center gap-x-1.5 rounded-3xl bg-yellow-100 px-3 py-1.5 text-sm font-semibold text-yellow-800">
          For Sale
        </button>
      </div>
    </div>
  )
}

export default PropertyInfoDisplay
