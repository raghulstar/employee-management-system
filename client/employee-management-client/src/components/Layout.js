import React from 'react';
import '../styles/Header.css'; // Update this path if your file is in `src/styles`
 // Import any necessary CSS

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">Employee Management System</header>
      <main>{children}</main>
      <footer className="footer">© 2024 Employee Management System</footer>
    </div>
  );
};

export default Layout;
