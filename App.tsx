import { useState } from 'react';
import Counter from './Counter';
import TodoList from './TodoList';

export default function App() {
  const [name, setName] = useState('World');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Hello {name}! 👋</h1>

      <div style={{ margin: '20px 0' }}>
        <label>
          Your name: {' '}
          <input
            type="text"
            value={name}
            onInput={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
      </div>

      <Counter />
      <TodoList />

      <div style={{
        background: '#e7f5ff',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '20px',
        border: '2px solid #1177bb'
      }}>
        <p style={{ fontSize: '14px', color: '#666' }}>
          💡 <strong>Multi-file editing!</strong> Counter and TodoList are 
in separate files. Check the file tree on the left to see all files.
        </p>
      </div>
    </div>
  );
}
