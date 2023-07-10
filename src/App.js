import "./App.css"
import { Application } from './application';
import { Skills } from "./components/Skills";
import { Counter } from "./components/Counter";

function App() {
   const skills = ["html", "css", "js", "react"];
  return (<div className="App">
    <Counter/>
    <Application />
    <Skills skills={skills} />
    </div>
  );
}

export default App;
