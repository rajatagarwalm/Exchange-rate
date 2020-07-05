import React from "react";

const Footer = props => {
  return (
    <div>
      <p>
        {"\u00A9"} {props.footerText} {"\u00A9"}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  footerText: " Exchange rate app 2020"
};

export default Footer;
