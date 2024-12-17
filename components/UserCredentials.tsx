import '@/styles/SignupPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  faUser,
  faChevronLeft,
  faEdit,
  faCamera,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
const UserCredentials = ({ onApproved }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Simulate form approval (you can add validation logic here)
      alert('User credentials approved!');
      onApproved(); // Move to next step
    };
  
    return (
      <div className="userCredentials">
          <p className="subtext">Get Started with your Credentials</p>
        
        <form className="form2" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required className="inputfield2" />
          <input type="email" placeholder="Email" required className="inputfield2" />
          <input type="phone" placeholder="Phone Number" required className="inputfield2" />
          <input type="text" placeholder="Shop/Mart Name" required className="inputfield2" />
          <input type="password" placeholder="Password" required className="inputfield2" />
            <button type="submit" className="iconButton">Submit</button>

        </form>
      </div>
    );
  };
  
  export default UserCredentials;
