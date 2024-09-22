import Trend from "@/app/(afterLogin)/_component/Trend";

export default function TrendSection() {
  return (
    <div className=" bg-[rgb(247, 249, 249)] rounded-2xl mt-3">
      <div className=" text-xl font-bold p-[12px_0]">
        <h3 className="mb-3 p-[0_16px]">나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  )
}