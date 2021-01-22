import { Grid, TextField, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getQueryResult } from "../../redux/actions/action";

const SearchForm = ({ getQueryResult }) => {
  const [keyword, setKeyword] = useState("");
  const [isDisable, setDisable] = useState(true);

  useEffect(() => {
    if (keyword !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [keyword]);

  const handleSearchButton = () => {
    getQueryResult({
      queryData: keyword,
    });
    setKeyword("");
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
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Grid>
          <Grid item xs={4} sm={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearchButton}
              disabled={isDisable}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {};
};

export default connect(mapStatetoProps, { getQueryResult })(SearchForm);
