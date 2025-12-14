export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__holder">
          <div className="menu__toggle">
            <button type="button" className="menu__open">
              Menu
            </button>
            <button type="button" className="menu__close">
              Close
            </button>
          </div>
          <div className="menu__content">
            <div className="menu__img">
              <img src="" alt="" />
            </div>
            <div className="menu__links">
              <ul className="menu">
                <li className="menu__item">
                  <a href="#hero" className="menu__link">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu__socials">
              <ul className="menu__social">
                <li className="menu__social-item">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="menu__social-link"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
