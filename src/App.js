import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import store from './utils/store';
import {Provider} from "react-redux"

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Header/>
      <Body/>
    </Provider>
    </div>
  );
}

export default App;

      /*
      header
      body
        Sidebar
          Menu Items
        Main Container
          Button List
          Video Container 
            Video Card
       */
