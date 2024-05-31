function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer__container">
      <p>Copyright © {currentYear} - Anne Nawrocki - Tous droits réservés</p>
    </footer>
  );
}

export default Footer;
