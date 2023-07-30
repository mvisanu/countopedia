import React from "react";

import logo from "./images/react.png"

const MainHeader = () => {
  return (
    <div className="pt-2 py-2 pl-2" style={{ backgroundColor: "black", borderBottom:"5px solid #777"}}>
    <img src={logo} alt="logo" style={{ height: "35px", verticalAlign: "top"}}></img>
    <span className="h2 pt-4 text-white-50">React Course - CountOPedia</span>
    </div>
  );
}


class Header extends React.Component {
  render() {
    return(
      <div>
       <MainHeader />
      </div>
    )
  }
}

export default Header;