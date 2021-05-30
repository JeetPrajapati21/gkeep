import React from "react";

const Footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
