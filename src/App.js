import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  return (
    <div className="search-names">
      <h1>Welcome to the SearchNames!</h1>
      <h2>Type in your name to see if it appears</h2>
      <input className="search-bar" type="text" placeholder="search ..." />
      {JSONDATA.map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
