import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardCard from "./DashboardCard";
import { DashboardStatisticChart } from "./DashboardStatisticChart";
import { DashboardProductChart } from "./DashboardProductChart";

function TotalDashbaord() {
  return (
    <div>
      <DashboardHeader />
      <DashboardCard />
      <div className="flex flex-col lg:flex-row gap-6 justify-center mt-10">
        <div className="lg:w-2/3 w-full h-full">
          <DashboardStatisticChart />
        </div>
        <div className="lg:flex-1 w-full h-full">
          <DashboardProductChart />
        </div>
      </div>
    </div>
  );
}

export default TotalDashbaord;
