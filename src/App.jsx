import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css';

import Navbar from './Navbar';
import MainFeaturesPage from './MainFeaturesPage';

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoconnect>
        <WalletModalProvider>
          <Router>
            <div className="min-h-screen bg-[#111827]">
              <Navbar />

              {/* Routes */}
              <main className="container mx-auto px-4">
                <Routes>
                  <Route path="/" element={<MainFeaturesPage />} />
                </Routes>
              </main>
            </div>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
