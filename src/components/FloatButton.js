import { Fab, makeStyles } from "@material-ui/core";
import Icon from "@mdi/react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(2),
  },
}));

export default function FloatButton({ iconName, goto }) {
  const classes = useStyles();
  const history = useHistory();

  const onClickHandler = () => {
    if (goto === "add") {
      history.push("/abbr-client/add");
    } else {
      history.push("/abbr-client/");
    }
  };

  return (
    <>
      <Fab
        size="large"
        aria-label="add new"
        color="primary"
        className={classes.fab}
        onClick={onClickHandler}
      >
        <Icon path={iconName} size={1.5} title="Add" />
      </Fab>
    </>
  );
}
