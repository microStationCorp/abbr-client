import { Paper, Typography } from "@material-ui/core";

const SingleData = ({ data, value }) => {
  return (
    <>
      <Paper
        variant="elevation"
        elevation={1}
        style={{ margin: "5px 0px", padding: "5px" }}
      >
        <Typography
          align="center"
          style={{ color: "#085CAB", fontWeight: "bold" }}
        >
          {data} :
        </Typography>
        <Typography align="center" style={{ color: "#BF2B03" }}>
          {value}
        </Typography>
      </Paper>
    </>
  );
};

export default SingleData;
