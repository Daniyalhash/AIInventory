"use client";
// app/dashboard/page.tsx
import DashboardCard from '@/components/DashboardCard';
import SectionHeading from '@/components/DashboardOver';
import Cards from '@/components/Cards';
import Cards2 from '@/components/Cards2';  // This is correct import, remove duplicate


import "../globals.css";

export default function DashboardPage() {
  return (
    <div className="dashboardPage">
      <SectionHeading />
 
     <Cards />
     <Cards2 />
      {/* Add other DashboardCard components here */}
    </div>
  );
}
