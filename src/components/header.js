import '../styles/header.css'
import logo from "../assets/images/logo192.png";
export default function Header(){
    return(
    <header className="header">
     <h1>React Beers</h1>
      <img className="header__logo" src={logo} alt="" />
    </header>
    )
}