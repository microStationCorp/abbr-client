import { Grid } from "@material-ui/core";
import { mdiPlus } from "@mdi/js";
import FloatButton from "../FloatButton";
import ResultData from "./ResultData";
import SearchForm from "./SearchForm";

export default function SearchPage() {
  return (
    <Grid container justify="center">
      <SearchForm />
      <ResultData />
      {/* floating action button */}
      <FloatButton iconName={mdiPlus} goto="add" />
    </Grid>
  );
}
