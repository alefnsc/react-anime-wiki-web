import React from "react";

interface iCardContainerProps {
  children: React.ReactNode;
}

export default function CardContainer({ children }: iCardContainerProps) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto  justify-center">
      {children}
    </div>
  );
}
