import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');

  // Namen beim Laden fetchen und bei Änderungen
  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setNames(response.data);
    } catch (error) {
      console.error('Fehler beim Fetchen:', error);
    }
  };

  const addName = async (e) => {
    e.preventDefault();
    if(!newName.trim()) return;
    try {
      const response = await axios.post('http://localhost:5000/users', { name: newName });
      console.log("POST Antwort:", response.data);
      setNewName('');
      fetchNames(); // Automatisch aktualisieren
    } catch (error) {
      console.error('Fehler beim Hinzufügen:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Namen-App</h1>
      <form onSubmit={addName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Namen eingeben"
          required
        />
        <button type="submit">Hinzufügen</button>
      </form>
      <h2>Alle Namen:</h2>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;