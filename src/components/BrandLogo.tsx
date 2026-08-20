import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "light",
  size = "md",
  className = "",
}) => {
  const iconSize =
    size === "sm"
      ? "w-7 h-7 text-sm rounded-lg"
      : size === "lg"
        ? "w-11 h-11 text-xl rounded-2xl"
        : "w-9 h-9 text-lg rounded-xl";
  const textSize =
    size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
    >
      {/* Icon: green rounded squircle with Khmer letter "ស" */}
      {/* <div
        className={`${iconSize} bg-[#20834D] text-white flex items-center justify-center font-bold font-['Noto_Sans_Khmer',sans-serif] shadow-sm flex-shrink-0`}
        aria-hidden="true"
      >
        <span>ស</span>
      </div> */}
      <img
        src="/public/sastra-noText.png"
        alt="Sastra AI"
        className="h-10 w-auto"
      />

      {/* Brand Text */}
      <div
        className={`font-bold tracking-tight ${textSize} font-['Plus_Jakarta_Sans',sans-serif] flex items-center gap-1`}
      >
        <span className={variant === "dark" ? "text-white" : "text-[#0C2F23]"}>
          Sastra
        </span>
        <span className="text-[#20834D]">AI</span>
      </div>
    </div>
  );
};
