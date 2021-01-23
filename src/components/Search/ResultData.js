import { Grid, Paper, Typography, CircularProgress } from "@material-ui/core";
import SingleData from "./singleData";
import { connect } from "react-redux";
import InformationComponent from "../InformationComponent";

const ResultData = ({ firstLoad, isLoading, queryResult, queryKeyword }) => {
  return firstLoad ? (
    <InformationComponent text="Please search any keyword" />
  ) : isLoading ? (
    <Grid item xs={8}>
      <Paper
        variant="elevation"
        elevation={3}
        style={{
          margin: "5px 0px",
          padding: "5px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      </Paper>
    </Grid>
  ) : queryResult.length === 0 ? (
    <InformationComponent
      text="no such keyword present"
      queryKeyword={queryKeyword}
    />
  ) : (
    <>
      <Grid item xs={8}>
        <Grid item>
          <Typography>Search Result for : "{queryKeyword}"</Typography>
        </Grid>
        {queryResult.map((qr) => {
          return (
            <Grid item key={qr._id}>
              <SingleData data={qr.sf} value={qr.ff} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    firstLoad: state.query.firstLoad,
    isLoading: state.query.isLoading,
    queryResult: state.query.queryResult,
    queryKeyword: state.query.queryKeyword,
  };
};

export default connect(mapStateToProps)(ResultData);
