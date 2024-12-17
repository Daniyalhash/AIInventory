import '@/styles/profileButton.css';
import Link from 'next/link';
import { useState ,useRef,useEffect} from 'react';

import { faBell, faAngleDown ,faRightFromBracket ,faAngleUp  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility
  const [isArrowUp, setIsArrowUp] = useState(false); // State to track arrow direction
  const dropdownRef = useRef(null); // Ref to dropdown div
  const profileButtonRef = useRef(null); // Ref to profile button to handle clicks

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
    setIsArrowUp(!isArrowUp); // Toggle arrow direction
  };

  // Close dropdown if user clicks outside of the profile or dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the profile section and dropdown
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) && 
        profileButtonRef.current && !profileButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close dropdown if clicked outside
        setIsArrowUp(false); // Reset arrow direction
      }
    };

    // Add the event listener for clicks on the document
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    console.log("User logged out");
    window.location.href = "/";
  }
  return (
    <div className="profileContainer">
      {/* Bell Icon */}
      <div className="bellIconContainer">
        <Link href="/dashboard/setting/notifications">
          <div className="bellIcon">
            <FontAwesomeIcon icon={faBell} className="Iconbell" />
          </div>
        </Link>
      </div>

         {/* Profile Section */}
      {/* Profile Section - Entire profile section is clickable */}
      <div className="profile" ref={profileButtonRef} onClick={toggleDropdown}>
        <img src="/images/men.jpg" alt="Profile" className="profilePic" />
        <button className="profileIcon">
          <FontAwesomeIcon icon={isArrowUp ? faAngleUp : faAngleDown} className="Iconarrow" />
        </button>
      </div>
  {/* Dropdown Tab */}
  {isOpen && (
        <div className="dropdown" ref={dropdownRef}> {/* Apply the ref here */}
          <div className="dropdownContent">
            <img src="/images/men.jpg" alt="Profile" className="dropdownPic" />
            <p className="dropdownName">John Doe</p>
            <p className="dropdownPhone">+1 234 567 890</p>
            <button className="logoutButton" onClick={handleLogout}>
  <FontAwesomeIcon icon={faRightFromBracket} className="IconLogout" /> Logout
</button>

          </div>
        </div>
      )}
    </div>
  );
};

  
  export default ProfileButton;