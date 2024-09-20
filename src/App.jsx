// App.js
import React from 'react';
import './App.css';
import { MainApp } from './MainApp';
import { Route, Routes } from 'react-router-dom';
import { First } from './First';
import { MobileScreen } from './components/MobileScreen';
import { No } from './components/No';
import { Yes } from './components/Yes';
import useWindowSize from './hooks/useWindowSize'; // Import the custom hook

function App() {
  const size = useWindowSize();
  const isMobile = size.width !== undefined && size.width < 1007; // Adjust the breakpoint as needed

  return (
    <div className="app-container">
      {isMobile ? (
        <Routes>
          <Route path="/" element={<MobileScreen />} />
          <Route path="/no" element={<No />} />
          <Route path="/yes" element={<Yes />} />
          {/* Add a NotFound route for mobile if needed */}
          <Route path="*" element={<MobileScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/main" element={<MainApp />} />
          {/* Add a NotFound route for PC */}
          <Route path="*" element={<First />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
