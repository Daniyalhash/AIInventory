import React from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts";
import "@/styles/visualGroupInventory.css"; // Import CSS styles

const VisualGroupInventory = () => {
  // Sample data
  const inventorySizeData = [
    { name: "Electronics", value: 400 },
    { name: "Groceries", value: 300 },
    { name: "Clothing", value: 200 },
    { name: "Other", value: 100 },
  ];

  const lowStockData = [
    { name: "Laptops", value: 10 },
    { name: "Chips", value: 15 },
    { name: "T-Shirts", value: 20 },
    { name: "Shoes", value: 5 },
  ];

  const topSellingProducts = [
    { name: "Product A", units: 1200 },
    { name: "Product B", units: 1100 },
    { name: "Product C", units: 1050 },
    { name: "Product D", units: 950 },
    { name: "Product E", units: 850 },
    { name: "Product F", units: 800 },
    { name: "Product G", units: 750 },
    { name: "Product H", units: 700 },
    { name: "Product I", units: 650 },
    { name: "Product J", units: 600 },
  ];

  const categoryAnalysis = [
    { category: "Electronics", turnover: 15 },
    { category: "Groceries", turnover: 30 },
    { category: "Clothing", turnover: 20 },
    { category: "Other", turnover: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="visual-group-container">
      {/* Two Small Charts */}
      <div className="small-charts-container">
        {/* Inventory Size Chart */}
        <div className="chart-container">
          <h3>Size of Inventory</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={inventorySizeData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120} // Increased size
              fill="#8884d8"
              label
            >
              {inventorySizeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <p>This chart shows the distribution of inventory across various categories such as Electronics, Groceries, Clothing, and Others.</p>
        </div>

        {/* Low Stock Items Chart */}
        <div className="chart-container">
          <h3>Low Stock Items</h3>
          <BarChart width={500} height={300} data={lowStockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
          <p>This bar chart displays the items that are running low on stock, helping identify products that may need to be restocked soon.</p>
        </div>
      </div>

      {/* Top 10 Selling Products */}
      <div className="big-chart-container">
        <h3>Top 10 Selling Products (Last Year)</h3>
        <LineChart
          width={600}
          height={300}
          data={topSellingProducts}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="units" stroke="#8884d8" />
        </LineChart>
        <p>This line chart tracks the top 10 best-selling products over the last year, based on units sold. It provides insights into trends and product performance.</p>
      </div>

      {/* Category Analysis */}
      <div className="big-chart-container">
        <h3>Inventory Turnover by Category</h3>
        <BarChart
          width={600}
          height={300}
          data={categoryAnalysis}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="turnover" fill="#FFBB28" />
        </BarChart>
        <p>This bar chart shows the turnover of products within different categories, highlighting which categories are performing the best in terms of sales.</p>
      </div>
    </div>
  );
};

export default VisualGroupInventory;
