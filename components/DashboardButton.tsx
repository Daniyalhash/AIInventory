import Link from 'next/link';
import '@/styles/SignupPage.css';
const DashboardButton = () => {
  return (
    <div className="stepContainer">
      <h2 className='dashHeading'>Welcome to AIventory your smart inventory management hub!</h2>
      <p className='dashHeadingSub'>You're good to go! Head to your Dashboard to get started</p>
      <Link href="/dashboard" className="iconButton">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default DashboardButton;
