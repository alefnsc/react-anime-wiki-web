import React from "react";

interface iCardContainerProps {
  children: React.ReactNode;
}

export default function CardContainer({ children }: iCardContainerProps) {
  return <div className="grid grid-cols-4 gap-4 m-auto">{children}</div>;
}
