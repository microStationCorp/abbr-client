import SearchForm from "./components/SearchForm";
import { Grid, CssBaseline } from "@material-ui/core";
import ResultData from "./components/ResultData";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Grid container justify="center">
          <SearchForm />
          <ResultData />
        </Grid>
      </Provider>
    </>
  );
}

export default App;
