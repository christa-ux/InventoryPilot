import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './components/routes';  

// create your routes in /routes for your components and import them into routes/index.js

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={route.element} 
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;