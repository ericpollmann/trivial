import { Component } from 'react';

// Class component with state
export default class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
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
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '12px',
            fontSize: '24px',
            fontWeight: '700',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
          }}>
            {this.state.count}
          </span>
          Counter
        </h2>
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={this.increment}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
            }}
          >
            + Increment
          </button>
          <button
            onClick={this.decrement}
            style={{
              padding: '12px 24px',
              background: 'white',
              color: '#667eea',
              border: '2px solid #667eea',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            − Decrement
          </button>
          <button
            onClick={() => this.setState({ count: 0 })}
            style={{
              padding: '12px 24px',
              background: '#f7fafc',
              color: '#718096',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            ↺ Reset
          </button>
        </div>
      </div>
    );
  }
}
