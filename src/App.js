import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddNewForm from "./components/AddNew/AddNewForm";
import SearchPage from "./components/Search/SearchPage";
import ErrorPage from "./components/Error/ErrorPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Router basename="/abbr-client/">
          <Switch>
            <Route path="/add">
              <AddNewForm />
            </Route>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
