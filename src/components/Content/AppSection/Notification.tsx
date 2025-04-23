import { ButtonIcon, ButtonIconProps } from "@/libs/ButtonIcon";

interface Props extends ButtonIconProps {
  no_of_notifications: number;
  indicator_bg?: string;
  indicator_color?: string;
  indicator_size?: number;
}

const BG = "#9F8D7E";
const COLOR = "#FFF";

export function Notification({
  children,
  no_of_notifications,
  indicator_bg = BG,
  indicator_color = COLOR,
  indicator_size,
  ...props
}: Props) {
  const notifications = no_of_notifications > 10 ? "10+" : no_of_notifications;

  return (
    <div
      className="notification"
      style={{ position: "relative", width: "28px", height: "28px", placeContent: "flex-end" }}
    >
      <ButtonIcon {...props}>{children}</ButtonIcon>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          color: indicator_color,
          background: indicator_bg,
          borderRadius: "99px",
          padding: "2px",
          fontSize: "8px",
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
          textAlign: "center",
          fontFamily: "Pretendard",
          fontWeight: 700,
        }}
      >
        {notifications}
      </div>
    </div>
  );
}
