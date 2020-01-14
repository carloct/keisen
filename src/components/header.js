import React, { useState } from "react"

export default props => {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const toggleVisibility = () => setMenuVisible(!isMenuVisible)

  return (
    <header className="default-header">
      <div className="container-fluid">
        <div className="header-wrap">
          <div className="header-top d-flex justify-content-between align-items-center">
            <div className="logo">
              <a href="index.html">
                Grunt<span className="text-primary">.</span>{" "}
              </a>
            </div>
            <div className="main-menubar d-flex align-items-center">
              <nav className={isMenuVisible ? "" : "hide"}>
                <a href="index.html">Home</a>
                <a href="generic.html">Generic</a>
                <a href="elements.html">Elements</a>
              </nav>
              <div className="menu-bar" onClick={toggleVisibility}>
                <span className="lnr lnr-menu"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
