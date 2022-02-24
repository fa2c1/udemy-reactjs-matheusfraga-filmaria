import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;