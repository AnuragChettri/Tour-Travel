import React from "react";
import Footer from "./Footer";
import MultiLevelNavbar from "./MultiLevelNavbar";

const Error = () => {
  return (
    <>
      <MultiLevelNavbar />
      <div className="h-[100vh] w-full flex justify-center items-center">
        <h1 className="text-4xl text-center mb-20 text-red-500">
          {" "}
          😔 No Such Place Found!{" "}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Error;
