import SearchForm from "./components/SearchForm";
import { Grid, CssBaseline } from "@material-ui/core";
import ResultData from "./components/ResultData";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container justify="center" >
        <SearchForm />
        <ResultData />
      </Grid>
    </>
  );
}

export default App;
