import "./style.css";
import logo2 from "../img/logo2.png";

function Footer() {
  return (
    <>
      <div className="footerCont">
        <ul className="list1">
          <a href="./index.html">
            <img src={logo2} alt="Logo" />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            donec non pellentesque ut.
          </p>
        </ul>
        <ul className="list2">
          <li><a href="#">About</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Resource</a></li>
          <li><a href="#">Term & Condition</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <ul className="list3">
          <li><a href="#">Company</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Partner With Us</a></li>
          <li><a href="#">Privacy & Policy</a></li>
          <li><a href="#">Features</a></li>
        </ul>
        <ul className="list3">
          <li><a href="#">Contact</a></li>
          <li><a href="tel:+0123456789">+012 3456789</a></li>
          <li><a href="mailto:adorableprogrammer@gmail.com">adorableprogrammer@gmail.com</a></li>
          <div className="icons">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-discord"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Footer;
