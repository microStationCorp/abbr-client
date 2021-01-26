import AdminLogin from "./AdminLoginPage";
import { mdiMagnify } from "@mdi/js";
import FloatButton from "../FloatButton";
import { connect } from "react-redux";
import AdminHome from "./AdminHomePage";

function AdminPage({ isAdmin }) {
  return (
    <>
      {isAdmin ? <AdminHome /> : <AdminLogin />}
      <FloatButton iconName={mdiMagnify} goto="search" />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.admin.isAuthenticated,
  };
};

export default connect(mapStateToProps)(AdminPage);
