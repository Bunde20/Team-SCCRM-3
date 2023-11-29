import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    // Fetch navigation items from the server
    fetch('/api/navigation')
      .then(response => response.json())
      .then(data => setNavigationItems(data))
      .catch(error => console.error('Error fetching navigation items:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          {navigationItems.map(item => (
            <a key={item._id} href={item.link}>
              {item.name}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default App;
