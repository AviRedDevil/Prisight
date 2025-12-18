import Sidebar from "./components/Sidebar";
import KpiCard from "./components/KpiCard";
import DemandChart from "./components/DemandChart";
import PricingCard from "./components/PricingCard";
import InventoryCard from "./components/InventoryCard";
import PromotionCard from "./components/PromotionCard";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6">
        
        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-4">
          <KpiCard title="Today's Revenue" value="₹1.2L" subtitle="Estimated" />
          <KpiCard title="Forecasted Demand" value="180 Units" subtitle="Next 7 days" />
          <KpiCard title="Stock Risk" value="High" subtitle="6 days left" />
          <KpiCard title="Best Price" value="₹529" subtitle="AI Recommended" />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6">
          <DemandChart />
          <PricingCard />
        </div>

        {/* Decision Engines */}
        <div className="grid grid-cols-2 gap-6">
          <InventoryCard />
          <PromotionCard />
        </div>

      </div>
    </div>
  );
}
