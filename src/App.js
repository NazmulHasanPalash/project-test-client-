import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import DataForm from './component/DataForm/DataForm';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route exact path="/home">
            <Home></Home>

          </Route>
          <Route exact path="/dataForm">
            <DataForm></DataForm>
          </Route>


          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
