import { useState } from 'react';

// Function component with hooks
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const activeTodos = todos.filter(t => !t.completed).length;

  return (
    <div style={{
      margin: '30px 0',
      padding: '24px',
      background: '#f7fafc',
      borderRadius: '12px',
      border: '2px solid #e2e8f0'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#2d3748',
        marginBottom: '8px'
      }}>
        Todo List
      </h2>
      <p style={{
        fontSize: '14px',
        color: '#718096',
        marginBottom: '20px'
      }}>
        {activeTodos} active · {todos.length} total
      </p>
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '20px'
      }}>
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          style={{
            flex: 1,
            padding: '12px 16px',
            border: '2px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '16px',
            color: '#2d3748',
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
            whiteSpace: 'nowrap'
          }}
        >
          Add
        </button>
      </div>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              background: 'white',
              borderRadius: '10px',
              border: '2px solid #e2e8f0',
              transition: 'all 0.2s ease',
              opacity: todo.completed ? 0.6 : 1
            }}
          >
            <label style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                  accentColor: '#667eea'
                }}
              />
              <span style={{
                fontSize: '16px',
                color: '#2d3748',
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}>
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fee',
                color: '#e53e3e',
                border: 'none',
                borderRadius: '8px',
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: '1'
              }}
            >
              ×
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <li style={{
            padding: '40px',
            textAlign: 'center',
            color: '#a0aec0',
            fontSize: '14px'
          }}>
            No todos yet. Add one above to get started!
          </li>
        )}
      </ul>
    </div>
  );
}
