export const PI = 3.14;

export const checkLogin = (email, password) => {
  // do something....

  return true;
};

const encodeJWT = (payload) => {
  console.log("encodeJWT");
};

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default encodeJWT;
