import { RecoilRoot } from "recoil";
import { Routes } from "./providers/Routes";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}

export default App;
