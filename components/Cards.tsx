import DashboardLayout from '@/app/dashboard/layout';
import DashboardCard from '@/components/DashboardCard';

const Cards = () => {
  return (
        <div className="cardSection">
        <DashboardCard
          title="Automate Vendors"
          value="500"
          description="Best Vendors"
          link="/dashboard/automate-vendors"
          bgColor="bg-custom-one" // Update class or set to "white"
          arrow="right"
  />
        <DashboardCard
          title="Total Products"
          value="3000"
          description="Size of Inventory"
          link="/dashboard/upcoming-expiry"
          bgColor="bg-custom-two"
          arrow="right"
        />
        <DashboardCard
          title="Stock Analysis"
          value="+34%"
          description="Demand for Next Week"
          link="/dashboard/demand-forecasting"
          bgColor="bg-custom-third" // Use your custom class
          arrow="right"
        />
        {/* <DashboardCard
          title="Stock Replenishment Suggestions"
          value="-50%"
          description="Olive Oil 500ml"
          link="/dashboard/stock-replenishment"
          bgColor="bg-red-100"
          arrow="right"
        />
        <DashboardCard
          title="Total Sales"
          value="Rs 400,000"
          description="Monthly Sales"
          link="/dashboard/total-sales"
          bgColor="bg-yellow-100"
          arrow="right"
        /> */}
      </div>
  );
};

export default Cards;
