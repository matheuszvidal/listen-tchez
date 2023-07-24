import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <img src={ logo } alt="" />
      <h1 className="text-white font-paradox font-bold text-5xl">Tchez</h1>
    </header>
  );
}

export default Header;
