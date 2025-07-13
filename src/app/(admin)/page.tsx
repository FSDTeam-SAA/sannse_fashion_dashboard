import MostProductChart from "./_components/most-product-card";
import RevenueOrderChart from "./_components/revenue-and-order";
import StatsCard from "./_components/stats/stats-cards";

export default function Home() {
  return (
    <div>
      <StatsCard />

      <div className="w-full grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <RevenueOrderChart />
        </div>
        <div className="col-span-4">
          <MostProductChart />
        </div>
      </div>
    </div>
  );
}
