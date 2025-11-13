import { useState } from 'react';
import Counter from './Counter';
import TodoList from './TodoList';

export default function App() {
  const [name, setName] = useState('World');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <style>{`
        .app {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          height: 100vh;
        }

        * {
          box-sizing: border-box;
        }

        input {
          transition: all 0.2s ease;
        }

        input:focus {
          outline: none;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        button {
          cursor: pointer;
          transition: all 0.2s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        button:active {
          transform: translateY(0);
        }
      `}</style>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        padding: '40px',
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '30px'
        }}>
          Hello {name}! 👋
        </h1>

        <div style={{ marginBottom: '30px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4a5568',
            fontWeight: '500',
            fontSize: '14px'
          }}>
            Your name
          </label>
          <input
            type="text"
            value={name}
            onInput={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              fontSize: '16px',
              color: '#2d3748',
            }}
          />
        </div>

        <Counter />
        <TodoList />

        <div style={{
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          padding: '20px',
          borderRadius: '12px',
          marginTop: '30px',
          border: '2px solid #667eea30',
        }}>
          <p style={{
            fontSize: '14px',
            color: '#4a5568',
            margin: 0,
            lineHeight: '1.6'
          }}>
            💡 <strong style={{ color: '#667eea' }}>Multi-file editing!</strong> Counter and TodoList are
in separate files. Check the file tree on the left to see all files.
          </p>
        </div>
      </div>
    </div>
  );
}
