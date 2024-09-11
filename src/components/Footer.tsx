const currentYear = new Date().getFullYear();

const Footer = ():JSX.Element => {
  return (
    <div className="footer">
      Crumbs by Emelie Jovanovic - {currentYear}
    </div>
  );
};

export default Footer;
  