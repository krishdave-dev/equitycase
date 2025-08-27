import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface Manager {
  name: string
  reg: string
  role: string
  img: string
}

const ManagerCard = ({ manager }: { manager: Manager }) => (
  <Card
    className="flex flex-col items-center p-0 gap-[19px]"
    style={{
      width: "297px",
      height: "425px",
      borderRadius: "16px",
    }}
  >
    <Avatar className="w-[297px] h-[320px] rounded-[16px] overflow-hidden bg-[var(--color-primary-blue)]">
      <AvatarImage src={manager.img} alt={manager.name} />
    </Avatar>
    <CardContent
      className="w-[297px] h-[86px] rounded-[16px] flex flex-col items-center justify-center"
      style={{
        background: "var(--card-mint-bg)",
      }}
    >
      <span
        className="font-medium text-[24px] leading-[24px]"
        style={{
          color: "var(--primary-green-3)",
          fontFamily: "Helvetica Neue LT Std, Helvetica, Arial, sans-serif",
          fontWeight: 500,
        }}
      >
        {manager.name}
      </span>
      <span
        className="font-medium text-[12px] mt-1"
        style={{
          fontFamily: "Nunito, Arial, sans-serif",
          fontWeight: 500,
          letterSpacing: "0.47em",
          color: "var(--primary-green-3)"
        }}
      >
        {manager.reg}
      </span>
      <span
        className="font-medium text-[12px]"
        style={{

          fontFamily: "Helvetica Neue LT Std, sans-serif",
          fontWeight: 300,
          letterSpacing: "0.47em",
          color: "var(--primary-green-3)"
        }}
      >
        {manager.role}
      </span>
    </CardContent>
  </Card>
)

export default ManagerCard