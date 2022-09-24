import logo from '../../assets/img/logo-lg.svg';
import './header.css';

function Header() {

  return (
    <header>
      <div className="systemreg-logo-container">
        <img src={logo} alt="systemreg" />
        <h1>SysReg</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@rinedualc.com</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
