import "./App.css";
import Menu from "./component/Menu";
import { MyRouter } from "./router/MyRouter";

function App() {
  return (
    <div>
      <Menu />
      <MyRouter />
    </div>
  );
}

export default App;