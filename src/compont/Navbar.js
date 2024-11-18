import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import Logo from "./IMG_6017.png";
import "./Cart";
import { Link } from 'react-router-dom';



function Navbar() {
	const navRef = useRef();
	

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
      
			<a href="/"><h1 id="H1">ArinrdzMart </h1></a>
        
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" />
      </a>
			<nav ref={navRef}>
      
				<a id="nav a" href="ProductInventory">Stock</a>
				<a id="nav a" href="/ProductTable">History</a>
				<a id="nav a" href="/Registration">Register</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
      
		</header>
    
	);
}

export default Navbar;