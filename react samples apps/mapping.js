import React, { useState, useMemo } from 'react';

const initialUsers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Alice Johnson' },
  { id: 3, name: 'Bob Smith' },
  { id: 4, name: 'Jane Wilson' },
];

function App() {
  const [query, setQuery] = useState('');
  const [fields, setFields] = useState([
    { id: 1, value: '' },
    { id: 2, value: '' },
  ]);

  // 🔸 Search & Filter using useMemo for optimization
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return initialUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  // 🔸 Update dynamic input field immutably
  const updateField = (index, newValue) => {
    const newFields = [...fields]; // Immutable update
    newFields[index].value = newValue;
    setFields(newFields); // Triggers re-render
  };

  // 🔸 Add new dynamic input field
  const addField = () => {
    const newId = fields.length + 1;
    setFields([...fields, { id: newId, value: '' }]); // Immutable append
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🔍 Searchable User List</h2>
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => setQuery(e.target.value)} // Arrow function
        value={query}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li> // Keys used here
        ))}
      </ul>

      <hr />

      <h2>📝 Dynamic Form Inputs</h2>
      {fields.map((field, index) => (
        <input
          key={field.id} // Keys used here
          value={field.value}
          onChange={(e) => updateField(index, e.target.value)} // Controlled input
          style={{ display: 'block', marginBottom: '10px' }}
        />
      ))}
      <button onClick={addField}>➕ Add Input Field</button>

      <hr />

      <h2>📦 Current Field Values</h2>
      <pre>{JSON.stringify(fields, null, 2)}</pre>
    </div>
  );
}

export default App;
