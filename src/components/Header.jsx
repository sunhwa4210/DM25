// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDeviceType } from "../hook/useDeviceType";
import "./Header.css";
import Logo from "../assets/img/logo.png";
import MenuIcon from "../assets/img/menu.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 디바이스 타입 (너가 이미 만든 훅 그대로 사용)
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

          {/* 데스크탑/태블릿용 메뉴 */}
          {isPcLayout && (
            <nav className="header-nav">
              <Link to="/">About</Link>
              <Link to="/plp">Projects</Link>
              <Link to="/participants">Participants</Link>
            </nav>
          )}

          {/* 모바일용 햄버거 버튼 */}
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

      {/* 모바일에서만 사이드 메뉴 */}
      {isMobileLayout && (
        <>
          {/* backdrop: 메뉴 바깥 클릭 시 닫기 */}
          <div
            className={`side-menu-backdrop ${isMenuOpen ? "is-open" : ""}`}
            onClick={closeMenu}
          />

          {/* side menu: 내부 클릭이 backdrop으로 버블링되지 않게 막기 */}
          <aside
            className={`side-menu ${isMenuOpen ? "is-open" : ""}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-hidden={!isMenuOpen}
          >
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
        </>
      )}
    </div>
  );
}

export default Header;
