import ManagerCard, { Manager } from "./ManagersCard"

const ManagersGrid = ({ managers }: { managers: Manager[] }) => (
  <div
    className="grid grid-cols-3 grid-rows-2 gap-[57px] mt-8"
    style={{ width: "1001px", height: "907px" }}
  >
    {managers.slice(0, 6).map((manager, idx) => (
      <ManagerCard key={idx} manager={manager} />
    ))}
  </div>
)

export default ManagersGrid