import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SizeSelector({handleSelector}:{handleSelector : (value:string)=>void}){
  return (
    <div className="px-5 mt-5 sm:mt-0">
      <Select onValueChange={handleSelector}>
        <SelectTrigger className="w-full sm:w-[180px] mt-3 sm:mt-4">
          <SelectValue placeholder="Select a Print Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Available Print Sizes</SelectLabel>
            <SelectItem value="4x6">4x6</SelectItem>
            <SelectItem value="5x7">5x7</SelectItem>
            <SelectItem value="8x10">8x10</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}