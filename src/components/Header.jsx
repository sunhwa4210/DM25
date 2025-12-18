// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDeviceType } from "../hook/useDeviceType";
import "./Header.css";
import Logo from "../assets/img/logo.png";
import MenuIcon from "../assets/img/menu.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isDesktop, isTablet, isMobile, isSmallMobile } = useDeviceType();

  const isPcLayout = isDesktop || isTablet; // 700 이상
  const isMobileLayout = isMobile || isSmallMobile; // 699 이하

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="headerWrapper">
      <header className="header">
        <div className="inner header-inner">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
          </div>

          {isPcLayout && (
            <nav className="header-nav">
              <Link to="/">About</Link>
              <Link to="/plp">Projects</Link>
              <Link to="/participants">Participants</Link>
            </nav>
          )}

          {isMobileLayout && (
            <button
              className="menu-button"
              type="button"
              onClick={toggleMenu}
              aria-label="메뉴 열기"
              aria-expanded={isMenuOpen}
            >
              <img src={MenuIcon} alt="menu" />
            </button>
          )}
        </div>
      </header>

      {/* 모바일 메뉴: 최상단 레이어로 묶어서 stacking 충돌 차단 */}
      {isMobileLayout && (
        <div className={`menu-layer ${isMenuOpen ? "is-open" : ""}`}>
          {/* backdrop */}
          <div className="menu-backdrop" onClick={closeMenu} />

          {/* panel */}
          <aside className="menu-panel">
            <nav className="side-menu-nav">
              <Link to="/" onClick={closeMenu}>
                About
              </Link>
              <Link to="/plp" onClick={closeMenu}>
                Projects
              </Link>
              <Link to="/participants" onClick={closeMenu}>
                Participants
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Header;
