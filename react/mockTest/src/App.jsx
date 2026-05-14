function App() {
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6', 
    boxSizing: 'border-box'
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const headingStyle = {
    textAlign: 'center',
    margin: '0 0 10px 0',
    color: '#333',
    fontFamily: 'sans-serif'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif'
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    fontFamily: 'sans-serif'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
        <h2 style={headingStyle}>Student Registration Form</h2>
        
        <input style={inputStyle} type="text" placeholder="Student Name" />
        <input style={inputStyle} type="email" placeholder="Email" />
        <input style={inputStyle} type="password" placeholder="Password" />
        <input style={inputStyle} type="text" placeholder="Course" />
        <input style={inputStyle} type="tel" placeholder="Mobile Number" />
        
        <button style={buttonStyle} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
