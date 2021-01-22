import Header from "./Header";
import CardSecContainer from "./CardSecContainer";
import { GlobalState } from "./Store";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <Header />
        <CardSecContainer />
      </GlobalState>
    </div>
  );
}

export default App;
