import Dropdown from "./Dropdown";
import "./CSS/style.css";
import { states } from "./Data/Data";

function App() {
  return (
    <div className="App">
      <Dropdown arr={states} field="name" />
    </div>
  );
}

export default App;
