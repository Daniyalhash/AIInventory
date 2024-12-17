import DashboardCard2 from '@/components/DashboardCard2'; 
import ProductComparisonChart from '@/components/ProductComparisonChart';

const Cards2 = () => {
  return (
    <div className="LargecardSection">
      <DashboardCard2
        title="Product Analysis"
        value="Most Unit Analysis"
        description="Analysis of two best Product based on 1 year sales"
        link="/dashboard/automate-vendors"
        bgColor="bg-custom-one"
        graphContent={<ProductComparisonChart />} // Pass the chart as a prop
      />
    </div>
  );
};

export default Cards2;
