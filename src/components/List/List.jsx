import React from "react";

const List = ({ results }) => {
  console.log("list component results prop", results);
  return (
    <div>
      {results.map((res) => (
        <div key={res.id}>
          <h2>{res.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default List;
