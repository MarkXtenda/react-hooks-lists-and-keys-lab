import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const sexy = links.map((link) =>{
    return <a href={'#'+link} key={link}>{link}</a>
  }) 

  return <nav>{sexy}</nav>;
}

export default NavBar;
