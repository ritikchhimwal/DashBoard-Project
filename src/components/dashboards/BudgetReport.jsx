import React, { useState } from "react";
import BudgetChart from "./BudgetChart";
import CardFilter from "./CardFilter";

const BudgetReport = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="recent-activity card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Budget Chart <span>/{filter}</span>
        </h5>
        <BudgetChart/>
      </div>
    </div>
  );
};

export default BudgetReport;
