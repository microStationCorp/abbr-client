import {
  Button,
  Container,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { loginAction } from "../../redux/actions/adminAction";
import { connect } from "react-redux";
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

function AdminLogin({ loginAction, isAdminLoading }) {
  const classes = useStyle();

  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    if (isAdminLoading) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [isAdminLoading]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(admin);
    loginAction(admin);

    setAdmin({
      username: "",
      password: "",
    });
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
            LogIn
          </Typography>

          <form onSubmit={onSubmitHandler}>
            <FormGroup className={classes.formGroup}>
              <TextField
                className={classes.inputBox}
                required
                variant="outlined"
                label="username"
                value={admin.username}
                onChange={(e) =>
                  setAdmin({ ...admin, username: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <TextField
                className={classes.inputBox}
                required
                variant="outlined"
                label="Password"
                type="password"
                value={admin.password}
                onChange={(e) =>
                  setAdmin({ ...admin, password: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isDisable}
              >
                LogIn
              </Button>
            </FormGroup>
          </form>
        </Container>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAdminLoading: state.admin.isAdminLoading,
  };
};
export default connect(mapStateToProps, { loginAction })(AdminLogin);
