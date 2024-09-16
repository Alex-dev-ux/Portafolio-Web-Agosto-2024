import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1><span>My</span> Portfolio</h1>
      </div>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
