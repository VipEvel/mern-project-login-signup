import React from "react";
import { connect } from "react-redux";

const Dashboard = ({ user }) => {
  return (
    <div className="p-8">
      <h1>Welcome {user.name} to the Dashboard</h1>
    </div>
  );
};

const mapStateToProps = ({ session }) => {
  return { user: session.user };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
