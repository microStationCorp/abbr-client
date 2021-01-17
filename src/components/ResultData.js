import { Grid } from "@material-ui/core";
import SingleData from "./singleData";

const ResultData = () => {
  const data = [
    { keyWord: "ABP", value: "Ananda Bazar Patrika" },
    { keyWord: "IB", value: "Intellegince bureau" },
    { keyWord: "CP", value: "Compressor" },
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
