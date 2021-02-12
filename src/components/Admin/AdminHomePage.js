import { mdiLogoutVariant } from "@mdi/js";
import { IconButton, makeStyles } from "@material-ui/core";
import Icon from "@mdi/react";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/adminAction";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

function AdminHome({ logoutAction }) {
  const classes = useStyles();
  return (
    <>
      <div>admin home page</div>
      <div className={classes.buttonContainer}>
        <IconButton size="small" color="primary" onClick={logoutAction}>
          <Icon path={mdiLogoutVariant} size={1} title="Add" />
        </IconButton>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { logoutAction })(AdminHome);
