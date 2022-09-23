import React from "react";

const Bookmark = ({ status, ...rest }) => {
  return (
    <button {...rest}>
      <i className={"bi bi-bookmark" + (status ? "-check-fill" : "")}></i>
    </button>
  );
};

export default Bookmark;
