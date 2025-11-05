export default function OrderItem({name, size, price}: {name:string, size:string | null, price:number}){

  return(
    <div className="flex justify-between mt-3">
      <h3 className="text-sm sm:text-md text-gray-600">{name}</h3>
      <h3 className="font-medium text-sm sm:text-md text-gray-700">{price} AED</h3>
    </div>
  )
}