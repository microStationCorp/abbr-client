import { Grid } from "@material-ui/core";
import SingleData from "./singleData";

const ResultData = () => {
  const data = [
    { keyWord: "CP", value: "Compressor" },
    { keyWord: "BP", value: "Brake Pressure" },
  ];
  return (
    <>
      <Grid item xs={8}>
        {data.map((d) => {
          return (
            <Grid item key={d.keyword}>
              <SingleData data={d.keyWord} value={d.value} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ResultData;
