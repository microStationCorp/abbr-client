import {
  Button,
  Container,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { mdiMagnify } from "@mdi/js";
import FloatButton from "../FloatButton";

const useStyle = makeStyles((theme) => ({
  inputBox: {
    width: "300px",
  },
  formGroup: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
  },
  container: {
    marginTop: "20px",
    padding: "30px",
  },
}));

export default function AddNewForm() {
  const classes = useStyle();
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <Container maxWidth="sm" className={classes.container}>
          <Typography
            align="center"
            variant="h4"
            color="primary"
            style={{ marginBottom: "10px" }}
          >
            Add New
          </Typography>

          <form onSubmit={onSubmitHandler}>
            <FormGroup className={classes.formGroup}>
              <TextField
                className={classes.inputBox}
                required
                variant="outlined"
                // fullWidth
                label="Short Form"
              />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <TextField
                className={classes.inputBox}
                required
                variant="outlined"
                fullWidth
                label="Full Form"
              />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
            </FormGroup>
          </form>
        </Container>
      </div>
      <FloatButton iconName={mdiMagnify} goto="search" />
    </>
  );
}
