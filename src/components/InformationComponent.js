import { Grid, Paper, Typography } from "@material-ui/core";

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

export default InformationComponent;
