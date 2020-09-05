import React from "react";
import "./app.scss";
import AuthPage from "./pages/auth-page";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2 className='logo'>vish Bobble.ai</h2>
      </header>
      <AuthPage />
    </div>
  );
}

export default App;
