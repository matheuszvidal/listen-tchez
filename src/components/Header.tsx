import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(0);

  const toggleMenu = (value: number) => {
    setIsActive(value);
  };

  return (
    <header className="flex items-center justify-between p-4 pt-4 sticky top-0 w-full bg-black">
      <Link to="/">
        <img src={logo} alt="Logo Tchez" className="w-28" />
      </Link>
      <ul className="flex space-x-8">
        <li>
          <Link
            to="/sobre"
            className={`text-slate-100 text-2xl ${
              isActive === 1 ? "border-b-2" : ""
            }`}
            onClick={() => toggleMenu(1)}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/contato"
            className={`text-slate-100 text-2xl ${
              isActive === 2 ? "border-b-2" : ""
            }`}
            onClick={() => toggleMenu(2)}
          >
            Contato
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
