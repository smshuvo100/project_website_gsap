"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AudioPlayer } from "./AudioPlayer";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <section className="header-wrapper">
        <div className="container">
          <header className="header">
            <Link href="/">
              <Image src="/images/logo.svg" alt="Logo" width={118} height={22} priority />
            </Link>

            <div className="toggle-container">
              <ThemeToggle />
              <AudioPlayer />
            </div>

            <div className="header-controls">
              <button onClick={toggleMenu} className="menu-button" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
                <div className="menu-icon">{isMenuOpen ? <RxCross1 style={{ fontSize: "1.25rem" }} /> : <RxHamburgerMenu style={{ fontSize: "1.25rem" }} />}</div>
              </button>
            </div>
          </header>
        </div>
      </section>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "visible" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="menu-container">
          <nav className="menu-nav">
            <ul>
              <li>
                <Link href="/" className="title-1 menu-link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="title-1 menu-link" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="title-1 menu-link" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? "visible" : ""}`} onClick={closeMenu} aria-hidden={!isMenuOpen} />
    </>
  );
}

export default Header;
