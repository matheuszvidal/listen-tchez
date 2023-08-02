import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="flex items-center justify-between p-20 pb-4 pt-4 sticky top-0 w-full bg-black">
      <Link to="/">
        <img src={logo} alt="Logo Tchez" className="md:w-28 w-36 md:-ml-0 -ml-14" />
      </Link>
      <ul className="flex space-x-16">
        <li>
          <Link
            to="/sobre"
            // className={`text-slate-100 text-2xl ${
            //   active === 1 ? "border-b-2" : ""
            // }`}
            className="text-slate-100 text-2xl"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/contato"
            // className={`text-slate-100 text-2xl ${
            //   active === 2 ? "border-b-2" : ""
            // }`}
            className="text-slate-100 text-2xl"
          >
            Contato
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
