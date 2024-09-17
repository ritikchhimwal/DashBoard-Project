import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Card from "./dashboards/Card";
import Reports from "./dashboards/Reports";
import RecentSales from "./dashboards/RecentSales";
import TopSelling from "./dashboards/TopSelling";
import RecentActivity from "./dashboards/RecentActivity";
import BudgetReport from "./dashboards/BudgetReport";
import WebTraffic from "./dashboards/WebTraffic";
import News from "./dashboards/News";

const Dashboard = () => {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch("https://dash-board-project-rouge.vercel.app/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards &&
              cards.length > 0 &&
              cards.map((card) => <Card key={card._id} card={card} />)}
            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
              <RecentSales />
            </div>
            <div className="col-12">
              <TopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
