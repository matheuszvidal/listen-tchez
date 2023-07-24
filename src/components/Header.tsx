import { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [isActive, setIsActive] = useState(0);

  const toggleMenu = (value: number) => {
    setIsActive(value);
  };

  return (
    <header className="flex items-center justify-between p-4 pt-4 fixed top-0 w-full z-50">
      <img src={logo} alt="Logo Tchez" className="w-28" />
      <ul className="flex space-x-8">
        <li>
          <a
            href="#"
            className={`text-slate-100 text-2xl ${
              isActive === 1 ? "border-b-2" : ""
            }`}
            onClick={() => toggleMenu(1)}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`text-slate-100 text-2xl ${
              isActive === 2 ? "border-b-2" : ""
            }`}
            onClick={() => toggleMenu(2)}
          >
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
