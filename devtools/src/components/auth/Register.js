import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      // name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.props;
    //   const { user } = this.props.auth
    return (
      <div>
        <div className="register">
          {/* { user? user.username : null } */}
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">
                  Create your DevConnector account
                </p>
                <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    name="username"
                    value={this.state.username}
                    placeholder="Email Address"
                    type="email"
                    onChange={this.onChange}
                    error={errors.username}
                  />

                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />

                  <TextFieldGroup
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                    error={errors.password2}
                  />
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
