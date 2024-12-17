import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import "@/styles/visualGroupInventory.css"; // Import CSS styles

const VendorManagementAnalysis = () => {
  // Sample data for charts
  const bestVendors = [
    { name: "Vendor A", value: 500 },
    { name: "Vendor B", value: 300 },
    { name: "Vendor C", value: 200 },
    { name: "Vendor D", value: 150 },
  ];

  const reliabilityScores = [
    { vendor: "Vendor A", reliability: 95 },
    { vendor: "Vendor B", reliability: 90 },
    { vendor: "Vendor C", reliability: 85 },
    { vendor: "Vendor D", reliability: 80 },
  ];

  const deliveryTime = [
    { vendor: "Vendor A", time: 2 },
    { vendor: "Vendor B", time: 3 },
    { vendor: "Vendor C", time: 4 },
    { vendor: "Vendor D", time: 5 },
  ];

  const profitContributions = [
    { vendor: "Vendor A", profit: 40 },
    { vendor: "Vendor B", profit: 30 },
    { vendor: "Vendor C", profit: 20 },
    { vendor: "Vendor D", profit: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="vendor-management-container">
      {/* Best Vendors */}
      <div className="chart-container">
        <h3>Best Vendors</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={bestVendors}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {bestVendors.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <p>This chart shows the top vendors based on overall performance and contribution to the inventory system.</p>
      </div>

      {/* Reliability Scores */}
      <div className="chart-container">
        <h3>Vendor Reliability Scores</h3>
        <BarChart width={500} height={300} data={reliabilityScores}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="vendor" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="reliability" fill="#82ca9d" />
        </BarChart>
        <p>This bar chart ranks vendors by their reliability scores, helping identify the most dependable partners.</p>
      </div>

      {/* Delivery Times */}
      <div className="chart-container">
        <h3>Best Vendors by Delivery Time</h3>
        <LineChart
          width={600}
          height={300}
          data={deliveryTime}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="vendor" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="time" stroke="#8884d8" />
        </LineChart>
        <p>This line chart evaluates vendors based on their delivery times, showcasing efficiency in meeting supply demands.</p>
      </div>

      {/* Profit Contributions */}
      <div className="chart-container">
        <h3>Best Vendors by Profit Contribution</h3>
        <BarChart
          width={600}
          height={300}
          data={profitContributions}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="vendor" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="profit" fill="#FFBB28" />
        </BarChart>
        <p>This bar chart highlights the vendors that contribute the most to overall profit margins, enabling strategic partnerships.</p>
      </div>
    </div>
  );
};

export default VendorManagementAnalysis;
