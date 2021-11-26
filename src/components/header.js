import "../styles/header.css";
import logo from "../assets/images/logo192.png";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="box-logo">
          <h1 className="header__title">React Beers</h1>
          <img className="header__logo" src={logo} alt="" />
        </div>
        <form action="">
          <label htmlFor="">Search</label>
          <input type="text" />
        </form>
      </div>
    </header>
  );
}
