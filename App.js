// App.js
import React, { useState } from 'react';

function App() {
  // 1. Counter
  const [count, setCount] = useState(0);

  // 2. Form Input
  const [name, setName] = useState('');

  // 3. Toggle
  const [isVisible, setIsVisible] = useState(true);

  // 4. List (Todo)
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // 5. Object State (Form)
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 6. Dependent State Update
  const increment = () => {
    setCount(prev => prev + 1);
  };

  // 7. Conditional Rendering (Login simulation)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 8. Dynamic Styling
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      backgroundColor: isDark ? '#333' : '#fff',
      color: isDark ? '#fff' : '#000',
      padding: '20px'
    }}>
      <h1>React useState Real-Time Examples</h1>

      {/* 1. Counter */}
      <section>
        <h2>1. Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </section>

      {/* 2. Form Input */}
      <section>
        <h2>2. Form Input</h2>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
      </section>

      {/* 3. Toggle */}
      <section>
        <h2>3. Toggle Visibility</h2>
        <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
        {isVisible && <p>This text is toggled!</p>}
      </section>

      {/* 4. List (Todo) */}
      <section>
        <h2>4. Todo List</h2>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button onClick={() => {
          setTasks([...tasks, task]);
          setTask('');
        }}>Add</button>
        <ul>
          {tasks.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </section>

      {/* 5. Object State */}
      <section>
        <h2>5. Form with Object State</h2>
        <input
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <p>Email: {formData.email}, Password: {formData.password}</p>
      </section>

      {/* 6. Dependent State */}
      <section>
        <h2>6. Dependent Update</h2>
        <p>(Handled in Counter using prev value)</p>
      </section>

      {/* 7. Conditional Rendering */}
      <section>
        <h2>7. Conditional Rendering</h2>
        {isLoggedIn ? (
          <p>Welcome back, User!</p>
        ) : (
          <p>Please log in</p>
        )}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </section>

      {/* 8. Dynamic Styling */}
      <section>
        <h2>8. Theme Switch</h2>
        <button onClick={() => setIsDark(!isDark)}>
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </section>
    </div>
  );
}

export default App;
