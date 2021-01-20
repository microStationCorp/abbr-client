import SearchForm from "./components/SearchForm";
import { Grid, CssBaseline, Fab, makeStyles } from "@material-ui/core";
import ResultData from "./components/ResultData";
import { Provider } from "react-redux";
import store from "./redux/store";
import { mdiPlus } from "@mdi/js";
import { Icon } from "@mdi/react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Grid container justify="center">
          <SearchForm />
          <ResultData />
        </Grid>
        <Fab
          size="large"
          aria-label="add new"
          color="primary"
          className={classes.fab}
        >
          <Icon path={mdiPlus} size={1.5} title="Add" />
        </Fab>
      </Provider>
    </>
  );
}

export default App;
