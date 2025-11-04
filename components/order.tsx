export default function Order(){
  return(
    <>
      <div>
        <div className="py-2 sm:py-3 mt-3 px-14">
          <span className="block pt-15 text-gray-500 text-md sm:text-lg font-medium pb-1 border-b-2 border-b-gray-200">Your Order:</span>
          <div className="flex justify-between mt-3">
            <h3 className="text-sm sm:text-md text-gray-600">Windows.jpg</h3>
            <h3 className="font-medium text-sm sm:text-md text-gray-700">2 AED</h3>
          </div>
          <div className="flex justify-between mt-3">
            <h3 className="text-sm sm:text-md text-gray-600">Windows.jpg</h3>
            <h3 className="font-medium text-sm sm:text-md text-gray-700">2 AED</h3>
          </div>
          <div className="flex justify-between mt-3">
            <h3 className="text-sm sm:text-md text-gray-600">Windows.jpg</h3>
            <h3 className="font-medium text-sm sm:text-md text-gray-700">2 AED</h3>
          </div>
          <div className="border-t-2 border-t-gray-100 pt-2 mt-2 flex justify-between">
            <h3 className="text-sm sm:text-lg text-gray-500 font-medium">Total Price:</h3>
            <h3 className="font-bold text-sm sm:text-lg text-gray-700">6 AED</h3>
          </div>
        </div>
      </div>
    </>
  )
}