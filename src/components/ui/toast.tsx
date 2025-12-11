import { toast } from "sonner";
import { ReactNode } from "react";

export enum ToastPosition {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
}

export interface ShowToastOptions {
  description?: string | ReactNode;
  duration?: number;
  position?: ToastPosition;
  actions?: { label: string; onClick: () => void }[];
}

const toastStyles = {
  success: {
    bg: "#efffed",
    color: "#0f5c2e",
    border: "1.5px solid #74d192",
    icon: "",
  },
  warning: {
    bg: "#fffbe6",
    color: "#946900",
    border: "1.5px solid #ffe494",
    icon: "",
  },
  danger: {
    bg: "#fff1f1",
    color: "#bb1e31",
    border: "1.5px solid #fa98aa",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#fa98aa" />
        <rect x="11" y="6.5" width="2" height="7" fill="#bb1e31" rx="1" />
        <rect x="11" y="15.5" width="2" height="2" fill="#bb1e31" rx="1" />
      </svg>
    ),
  },
  neutral: {
    bg: "#f8fafc",
    color: "#334155",
    border: "1.5px solid #cbd5e1",
    icon: "",
  },
};

function ToastContent({
  icon,
  message,
  description,
  actions,
}: {
  icon: ReactNode;
  message: ReactNode;
  description?: ReactNode;
  actions?: { label: string; onClick: () => void }[];
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        gap: 12,
        minWidth: 280,
        maxWidth: 420,
      }}
    >
      <div
        style={{
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 1.35,
            marginBottom: description ? 4 : 0,
          }}
        >
          {message}
        </div>
        {description && (
          <div
            style={{
              fontWeight: 400,
              fontSize: 14,
              opacity: 0.92,
              marginBottom: actions ? 8 : 0,
              marginTop: 2,
            }}
          >
            {description}
          </div>
        )}
        {actions && actions.length > 0 && (
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            {actions.map(({ label, onClick }, idx) => (
              <button
                key={idx}
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  border: "none",
                  background: "#E0E7EF",
                  color: "#1e293b",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "background 0.12s",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function showSuccess(
  message: string | ReactNode,
  options?: ShowToastOptions,
) {
  const { bg, color, border, icon } = toastStyles.success;
  toast.success(
    <ToastContent
      icon={icon}
      message={message}
      description={options?.description}
      actions={options?.actions}
    />,
    {
      duration: options?.duration ?? 3000,
      style: {
        background: bg,
        color,
        border,
        borderRadius: 12,
        boxShadow:
          "0 4px 20px rgba(52,199,89,0.08), 0 2px 4px rgba(36, 185, 90, 0.04)",
        fontFamily: "inherit",
        padding: "18px 20px",
        direction: "rtl",
      },
      position: options?.position ?? ToastPosition.TopCenter,
    },
  );
}

export function showWarning(
  message: string | ReactNode,
  options?: ShowToastOptions,
) {
  const { bg, color, border, icon } = toastStyles.warning;
  toast.warning(
    <ToastContent
      icon={icon}
      message={message}
      description={options?.description}
      actions={options?.actions}
    />,
    {
      duration: options?.duration ?? 3500,
      style: {
        background: bg,
        color,
        border,
        borderRadius: 12,
        boxShadow:
          "0 4px 20px rgba(253, 204, 66, 0.08), 0 2px 4px rgba(183, 159, 40, 0.04)",
        fontFamily: "inherit",
        padding: "18px 20px",
        direction: "rtl",
      },
      position: options?.position ?? ToastPosition.TopCenter,
    },
  );
}

export function showDanger(
  message: string | ReactNode,
  options?: ShowToastOptions,
) {
  const { bg, color, border, icon } = toastStyles.danger;
  toast.error(
    <ToastContent
      icon={icon}
      message={message}
      description={options?.description}
      actions={options?.actions}
    />,
    {
      duration: options?.duration ?? 4000,
      style: {
        background: bg,
        color,
        border,
        borderRadius: 12,
        boxShadow:
          "0 4px 20px rgba(229, 40, 40, 0.08), 0 2px 4px rgba(230, 56, 84, 0.04)",
        fontFamily: "inherit",
        padding: "18px 20px",
        direction: "rtl",
      },
      position: options?.position ?? ToastPosition.TopCenter,
    },
  );
}

export function showNeutral(
  message: string | ReactNode,
  options?: ShowToastOptions,
) {
  const { bg, color, border, icon } = toastStyles.neutral;
  toast(
    <ToastContent
      icon={icon}
      message={message}
      description={options?.description}
      actions={options?.actions}
    />,
    {
      duration: options?.duration ?? 2500,
      style: {
        background: bg,
        color,
        border,
        borderRadius: 12,
        boxShadow:
          "0 4px 16px rgba(51,65,85,0.06), 0 2px 4px rgba(71,85,105,0.03)",
        fontFamily: "inherit",
        padding: "18px 20px",
        direction: "rtl",
      },
      position: options?.position ?? ToastPosition.TopCenter,
    },
  );
}
