import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import store from './utils/store';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <div>
      <Header/>
      <Router>
      <Routes>
      <Route path="/" element=<Body/>>
        <Route path="/" element=<MainContainer/>/>
        <Route path="/watch" element=<WatchPage/>/>
      </Route>
      </Routes>
      </Router>
      </div>
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
