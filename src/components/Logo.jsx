import React from "react";

const Logo = ({ callback, className }) => {
  return (
    <div
      className={"logo " + className}
      onClick={() => {
        window.location.href = "/";
      }}
    >
      Amicon
    </div>
  );
};

export default Logo;
