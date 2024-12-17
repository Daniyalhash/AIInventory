import Link from 'next/link';
import '../src/styles/dashboardCard2.css';

export default function DashboardCard2({ title, value, description, link, bgColor, graphContent }) {
  return (
    <div className={`card2 ${bgColor}`}>
      <div className="cardBackground2">
        <div className="overlay2"></div>
      </div>
      <div className="cardContent2">
        <h3 className="cardTitle2">{title}</h3>
        <p className="cardValue2">{value}</p>
        <p className="cardDescription2">{description}</p>

        {/* Render graph content dynamically */}
        <div className="graphSection2">{graphContent}</div>

        <Link href={link}>
          <button className="iconArrow2">→</button>
        </Link>
      </div>
    </div>
  );
}
