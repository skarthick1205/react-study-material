import React, { useState, useRef, useCallback } from 'react';

// Child component demonstrating callback via props
function ChildButton({ onCustomClick }) {
  console.log('ChildButton rendered');
  return <button onClick={() => onCustomClick('Hello from Child')}>Child Click</button>;
}

function App() {
  // Controlled Input State
  const [controlledValue, setControlledValue] = useState('');
  
  // Uncontrolled Input Ref
  const uncontrolledRef = useRef();

  // Asynchronous state update simulation
  const [asyncData, setAsyncData] = useState(null);

  // === Controlled Input Handler ===
  const handleControlledChange = (e) => {
    console.log('Synthetic Event:', e);
    setControlledValue(e.target.value);
  };

  // === Uncontrolled Submit Handler ===
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled value: ${uncontrolledRef.current.value}`);
  };

  // === Avoid Direct Function Call in JSX ===
  const greetUser = (name) => {
    alert(`Hello, ${name}`);
  };

  // === Callback Function - useCallback Optimization ===
  const memoizedGreet = useCallback(() => {
    greetUser('React Developer');
  }, []);

  // === Asynchronous Callback ===
  const fetchAsyncData = () => {
    setTimeout(() => {
      setAsyncData('✅ Fetched from Server!');
    }, 2000);
  };

  // === Callback passed to Child ===
  const handleChildMessage = useCallback((message) => {
    alert(message);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🔄 Event Handling & Callbacks in React</h2>

      {/* Controlled Input */}
      <div style={{ marginBottom: '10px' }}>
        <label>Controlled Input: </label>
        <input
          type="text"
          value={controlledValue}
          onChange={handleControlledChange}
        />
        <p>State Value: {controlledValue}</p>
      </div>

      {/* Uncontrolled Input */}
      <div style={{ marginBottom: '10px' }}>
        <form onSubmit={handleUncontrolledSubmit}>
          <label>Uncontrolled Input: </label>
          <input type="text" ref={uncontrolledRef} defaultValue="initial" />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Avoid Immediate Execution */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => greetUser('React User')}>Greet User</button>
      </div>

      {/* useCallback Example */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={memoizedGreet}>Memoized Greet</button>
      </div>

      {/* Async Callback Simulation */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={fetchAsyncData}>Fetch Async Data</button>
        {asyncData && <p>{asyncData}</p>}
      </div>

      {/* Callback to Child */}
      <div style={{ marginBottom: '10px' }}>
        <ChildButton onCustomClick={handleChildMessage} />
      </div>

      {/* Array Callback Function */}
      <div>
        <h4>Mapped List with Callbacks:</h4>
        {['One', 'Two', 'Three'].map((item, index) => (
          <p key={index}>Item: {item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
