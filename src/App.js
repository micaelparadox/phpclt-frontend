import React from 'react';
import './App.css';
import Header from './components/Header'
import Introduction from './components/Introduction';
import GettingStarted from './components/GettingStarted';
import InstallUpdate from './components/InstallUpdate';
import Usage from './components/Usage';
import CommandList from './components/CommandList';
import ConfigurationFile from './components/ConfigurationFile';
import Modules from './components/Modules';
import Footer from './components/Footer';
// import logo from './logo.svg'

function App() {
  return (
    <div className="dark">
      <Header />
      <main>
        <Introduction />
        <GettingStarted />
        <InstallUpdate />
        <Usage />
        <CommandList />
        <ConfigurationFile />
        <Modules />
      </main>
      <Footer />
    </div>
  );
}

export default App;

