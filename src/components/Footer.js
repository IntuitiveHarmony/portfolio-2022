const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footerText">
        Made with 💜 in {year} by{" "}
        <a
          className="pinkLink"
          href="https://github.com/IntuitiveHarmony"
          target="_blank"
          rel="noopener noreferrer"
        >
          Intuitive Harmony
        </a>
      </p>
    </footer>
  );
};

export default Footer;
