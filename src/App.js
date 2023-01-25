import logo from './logo.svg';
import './App.css';
import { useAuth0 , } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout,isAuthenticated,} = useAuth0();
  return (
    <div className="App">
      {
        isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button> : <button onClick={() => loginWithRedirect()}>Log In</button>
      }
   
    
    </div>
  );
}

export default App;
