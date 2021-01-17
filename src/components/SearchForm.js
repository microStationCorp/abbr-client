import { Grid, TextField, Button } from "@material-ui/core";
import { useState } from "react";

const SearchForm = () => {
  const [searchVal, setSearchVal] = useState("");

  const handleSearchButton = () => {
    console.log(searchVal);
    setSearchVal("")
  };

  return (
    <>
      <Grid item xs={10} style={{ margin: "10px 0px" }}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              variant="outlined"
              fullWidth
              label="Search Box"
              size="small"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearchButton}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchForm;
