import React, { useEffect, useState } from "react";
import CardFilter from "./CardFilter";
import RecentActivityItem from "./RecentActivityItem";
import "./recentActivity.css";

const RecentActivity = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/recentactiviy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setItems(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recent-activity card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span>/{filter}</span>
        </h5>

        <div className="activity">
          {items && items.length > 0 ? (
            items.map((item) => (
              <RecentActivityItem key={item._id} item={item} />
            ))
          ) : (
            <p>No recent activity available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
