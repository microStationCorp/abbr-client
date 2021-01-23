import {
  Button,
  Container,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { mdiMagnify } from "@mdi/js";
import { useState } from "react";
import FloatButton from "../FloatButton";
import { connect } from "react-redux";
import { addNewAbbr } from "../../redux/actions/action";

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

function AddNewForm({ isUploading, addNewAbbr, errorCode, successMsg }) {
  const [sf, setsf] = useState("");
  const [ff, setff] = useState("");
  const classes = useStyle();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewAbbr({
      shortForm: sf,
      fullForm: ff,
    });
    setff("");
    setsf("");
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
            {errorCode ? (
              <FormGroup className={classes.formGroup}>
                <Typography color="error">{errorCode}</Typography>
              </FormGroup>
            ) : null}
            {successMsg ? (
              <FormGroup className={classes.formGroup}>
                <Typography color="primary">{successMsg}</Typography>
              </FormGroup>
            ) : null}

            <FormGroup className={classes.formGroup}>
              <TextField
                className={classes.inputBox}
                required
                variant="outlined"
                label="Short Form"
                value={sf}
                onChange={(e) => setsf(e.target.value)}
              />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <TextField
                className={classes.inputBox}
                required
                variant="outlined"
                label="Full Form"
                value={ff}
                onChange={(e) => setff(e.target.value)}
              />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              {isUploading ? (
                <Button type="submit" variant="contained" color="primary">
                  <CircularProgress color="inherit" />
                </Button>
              ) : (
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              )}
            </FormGroup>
          </form>
        </Container>
      </div>
      <FloatButton iconName={mdiMagnify} goto="search" />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isUploading: state.upload.isUploading,
    errorCode: state.upload.errorCode,
    successMsg: state.upload.successMsg,
  };
};
export default connect(mapStateToProps, { addNewAbbr })(AddNewForm);
