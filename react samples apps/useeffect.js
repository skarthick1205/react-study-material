// App.js
import React, { useEffect, useState } from 'react';

function App() {
  // Case 1: Run once (Mount)
  useEffect(() => {
    console.log('🚀 Component Mounted');
  }, []);

  // Case 2: State change
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`🔁 Count changed: ${count}`);
  }, [count]);

  // Case 3: Every render
  useEffect(() => {
    console.log('💡 Component re-rendered');
  });

  // Case 4: Cleanup (timer)
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('⏰ Timeout triggered');
    }, 2000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  // Case 5: API on Mount
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // Case 6: API on state change
  var [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  // Case 7: Window Resize Listener
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Case 8: Interval
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React `useEffect` Real-Time Examples</h1>

      <section>
        <h2>1. Mount Effect</h2>
        <p>Check console for "Component Mounted"</p>
      </section>

      <section>
        <h2>2. Count State Change</h2>
        <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
        <p>Count: {count}</p>
      </section>

      <section>
        <h2>3. Render Tracker</h2>
        <p>Check console for re-renders</p>
      </section>

      <section>
        <h2>4. Timer with Cleanup</h2>
        <p>Check console for timeout log after 2 sec</p>
      </section>

      <section>
        <h2>5. API on Mount</h2>
        <ul>
          {users.slice(0, 3).map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>6. API on State Change</h2>
        <button onClick={() => userId<users.length?setUserId(id => id + 1): setUserId(1)}>Next User</button>
        {user && <p>Selected User: {user.name}</p>}
      </section>

      <section>
        <h2>7. Window Resize Listener</h2>
        <p>Current Width: {width}px</p>
      </section>

      <section>
        <h2>8. Timer with Interval</h2>
        <p>Timer: {time} seconds</p>
      </section>
    </div>
  );
}

export default App;
