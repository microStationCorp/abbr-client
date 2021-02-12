import AdminLogin from "./AdminLoginPage";
import { mdiMagnify } from "@mdi/js";
import FloatButton from "../FloatButton";
import { connect } from "react-redux";
import AdminHome from "./AdminHomePage";
import { adminLoadingAction } from "../../redux/actions/adminAction";
import { useEffect } from "react";

function AdminPage({ isAdmin, adminLoadingAction }) {
  useEffect(() => {
    if (!isAdmin) {
      adminLoadingAction();
    }
  });
  return (
    <>
      {isAdmin ? <AdminHome /> : <AdminLogin />}
      {/* <AdminHome /> */}
      <FloatButton iconName={mdiMagnify} goto="search" />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.admin.isAuthenticated,
  };
};

export default connect(mapStateToProps, { adminLoadingAction })(AdminPage);
