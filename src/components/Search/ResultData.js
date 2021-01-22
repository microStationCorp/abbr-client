import { Grid, Paper, Typography, CircularProgress } from "@material-ui/core";
import SingleData from "./singleData";
import { connect } from "react-redux";

const InformationComponent = ({ text, queryKeyword }) => {
  return (
    <>
      <Grid item xs={8}>
        <Paper
          variant="elevation"
          elevation={3}
          style={{
            margin: "5px 0px",
            padding: "5px",
          }}
        >
          <Typography align="center">{text}</Typography>
          {queryKeyword ? (
            <Typography align="center" style={{ fontWeight: "bold" }}>
              "{queryKeyword}"
            </Typography>
          ) : null}
        </Paper>
      </Grid>
    </>
  );
};

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
    firstLoad: state.firstLoad,
    isLoading: state.isLoading,
    queryResult: state.queryResult,
    queryKeyword: state.queryKeyword,
  };
};

export default connect(mapStateToProps)(ResultData);
