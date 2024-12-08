import React from "react";

function PageService({ title, children }) {
  return (
    <>
      <title>{title}</title>
      {children}
    </>
  );
}

export default PageService;
