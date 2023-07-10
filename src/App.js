import "./App.css"
import { Application } from './application';
import { Skills } from "./components/Skills";

function App() {
   const skills = ["html", "css", "js", "react"];
  return (<div className="App">
    <Application />
    <Skills skills={skills} />
    </div>
  );
}

export default App;
