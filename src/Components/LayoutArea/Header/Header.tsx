import Logo from "../../HomeArea/Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">

            {/* Display Image */}
            <Logo />

            <h1>Northwind Traders</h1>
        </div>
    );
}


export default Header;

