const currentYear = new Date().getFullYear();

const Footer = ():JSX.Element => {
  return (
    <div className="footer">
      Crumbs by Emelie Bojanic  - {currentYear}
    </div>
  );
};

export default Footer;
  