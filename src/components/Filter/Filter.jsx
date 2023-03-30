import React from "react";
import { WrapperFilter } from "./Filter.styled";


const Filter = ({filter, handleFilterChange}) => {
  return (
    <WrapperFilter>
      <div>
      <label clasName="label-menu">
      Menu
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="sandwiches">Sandwiches</option>
        <option value="extras">Extras</option>
      </select>
    </label>
      </div>
  </WrapperFilter>
  );
};

export default Filter;
