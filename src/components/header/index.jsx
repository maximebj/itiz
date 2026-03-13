import "./style.css";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__logo">X</div>
      <div className="site-header__title">Titre de mon site</div>
      <nav className="site-header__menu" role="navigation">
        <a href="/">Services</a>
        <a href="/">A propos</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </nav>

      <div className="site-header__user">
        <img src="img/avatar.jpg" alt="avatar" />
        Maxime BJ
      </div>
    </header>
  );
}

export default Header;
