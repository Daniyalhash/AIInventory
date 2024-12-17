import Link from 'next/link';
import '../src/styles/dashboardCard.css'
import VendorGraph from '@/components/VendorGraph' 
export default function DashboardCard({ title, value, description, link, bgColor }) {
  return (
    <div className={`card ${bgColor}`}>
    <div className="cardBackground">
      <div className="overlay"></div>
    </div>
    <div className="cardContent">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardValue">{value}</p>
      <p className="cardDescription">{description}</p>
      <Link href={link}>
        <button className="iconArrow">→</button> {/* Changed icon to text */}
      </Link>
      
    
    </div>
  </div>
  );
}
