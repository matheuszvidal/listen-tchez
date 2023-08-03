import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col items-center md:flex-row justify-between p-20 z-50 pb-4 pt-4 sticky top-0 w-full bg-black shadow-xl">
      <Link to="/">
        <img
          src={logo}
          alt="Logo Tchez"
          className="md:w-28 w-36 md:-ml-0 -ml-14"
        />
      </Link>
      <ul className="md:flex md:space-x-16">
        <li>
          <Link to="/sobre" className="text-slate-100 text-2xl relative group">
            Sobre
            <div className="bar hidden group-hover:block bg-white h-0.5 w-full transform origin-left transition-all duration-300 ease-in-out" />
          </Link>
        </li>
        <li>
          <Link
            to="/contato"
            className="text-slate-100 text-2xl relative group"
          >
            Contato
            <div className="bar hidden group-hover:block bg-white h-0.5 w-full transform origin-left transition-all duration-300 ease-in-out" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
