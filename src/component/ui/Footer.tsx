export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__header">
          <a href="#" className="footer__top">
            Back to Top
          </a>
          <div className="footer__title">
            <p>Arun dhungana</p>
          </div>
          <a href="mailto:" className="footer__email">
            Email
          </a>
        </div>
        <div className="">
          <ul className="footer__socials">
            <li className="footer__socials-item">
              <a href="#" className="footer__social-link"></a>
            </li>
          </ul>
        </div>
        <p className="footer__message">
          Thanks for scrolling this far. Feel free to leave a message or
          feedback.
        </p>
      </div>
    </footer>
  );
}
