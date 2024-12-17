// components/SettingOver.tsx
import '../src/styles/NotificationsOver.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronLeft,
  faEdit,
  faCamera,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
export default function NotificationsOver() {
  return (
    <section className="section">
        {/* Back to Settings Link */}
        <Link href={"/dashboard/setting"} className="Backsettings">
        <FontAwesomeIcon icon={faChevronLeft} className="EPicon" />
        <span>Settings</span>
      </Link>
      <h2 className="secHead">Notification Center</h2>
      <p className="secSubhead">Manage system Alerts and customize settings for seamless operations</p>
    </section>
  );
}