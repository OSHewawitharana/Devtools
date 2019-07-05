import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  state = {};

  onDeleteEducation(id) {
    this.props.deleteEducation(id);
  }

  render() {
    console.log("Education", this.props.education);

    const education =
      this.props.education != null
        ? this.props.education.map(edu => (
            <tr key={edu.id}>
              <td>{edu.school}</td>
              <td>{edu.degree}</td>
              <td>
                {edu.from} - {edu.to === "" ? "now" : edu.to}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={this.onDeleteEducation.bind(this, edu.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        : "";
    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
            {education}
          </thead>
        </table>
      </div>
    );
  }
}

Education.protoTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
