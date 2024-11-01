import React from 'react';
import { Link } from 'react-router-dom';
import {
    WalletMultiButton,
    WalletDisconnectButton,
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          VaultX
        </div>

        {/* Center Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Dashboard</Link>
        </div>

        {/* Wallet Buttons */}
        <div className="wallet-buttons">
          <WalletMultiButton className="wallet-button multi-button" />
          <WalletDisconnectButton className="wallet-button disconnect-button" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
