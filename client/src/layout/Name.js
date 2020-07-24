import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Name extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <button className="btn btn-info">Hello Mr...</button>

        <h1 style={{ color: "#28a745" }}>{user ? user.name : null}</h1>
      </div>
    );
  }
}
Name.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Name);
