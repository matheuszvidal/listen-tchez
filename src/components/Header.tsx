import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="flex items-center justify-between p-4 pt-4 sticky top-0 w-full bg-black">
      <Link to="/">
        <img src={logo} alt="Logo Tchez" className="w-28" />
      </Link>
      <ul className="flex space-x-8">
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
