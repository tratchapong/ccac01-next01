import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="p-2 border">Sub header</div>
      {children}
    </>
  );
}
