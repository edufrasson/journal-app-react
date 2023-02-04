import { Layout } from "./components/Layout"
import { CardContextProvider } from "./context/CardContext";
import GlobalSytle from "./styles/GlobalSytle";

function App() {
  return (
    <div className="App"> 
      <CardContextProvider>
        <Layout />
      </CardContextProvider>       
              
      <GlobalSytle />
    </div>
  );
}

export default App;
