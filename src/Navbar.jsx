import logo from "./images/logo.png"
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo"/>
                      
        <ul> 
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    );
}