import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  state = {};

  onDeleteExperience(id) {
    this.props.deleteExperience(id);
  }

  render() {
    console.log("experience", this.props.experience);

    const experience = this.props.experience != null
        ? this.props.experience.map(exp => (
            <tr key={exp.id}>
              <td>{exp.company}</td>
              <td>{exp.title}</td>
              <td>{exp.from} - {exp.to === "" ? "now" : exp.to}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={this.onDeleteExperience.bind(this, exp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        : "";
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>company</th>
              <th>Title</th>
              <th>Year</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.protoTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
