import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
// import { createProfile } from "../../actions/profileActions";

class NeedHelp extends Component {
  // constructor(props) {
  //     super(props);
  // this.state = {
  //       displaySocialInputs: false,
  // handle: "",
  //       company: "",
  //       website: "",
  //       location: "",
  //       status: "",
  //       skills: "",
  //       githubusername: "",
  //       bio: "",
  //       twitter: "",
  //       facebook: "",
  //       linkedin: "",
  //       youtube: "",
  //       instagram: "",
  //   errors: {}
  // };

  // this.onChange = this.onChange.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const needHelpData = {
  // handle: this.state.handle
  // company: this.state.company,
  // website: this.state.website,
  // location: this.state.location,
  // status: this.state.status,
  // skills: this.state.skills,
  // githubusername: this.state.githubusername,
  // bio: this.state.bio,
  // twitter: this.state.twitter,
  // facebook: this.state.facebook,
  // linkedin: this.state.linkedin,
  // youtube: this.state.youtube,
  // instagram: this.state.instagram
  // };

  //   this.props.NeedHelp(needHelpData, this.props.history);
  // }

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  render() {
    return (
      <div className="needhelp-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Need Help</h1>
              <p className="lead text-center">
                Let's get some information for what you need help with
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Heading"
                  name="heading"
                  // value={this.state.handle}
                  // onChange={this.onChange}
                  // error={errors.handle}
                  info="A heading for what you need help with"
                />
                <TextFieldGroup
                  placeholder="Description"
                  name="description"
                  // value={this.state.company}
                  // onChange={this.onChange}
                  // error={errors.company}
                  info="Describe what you need help with in more detail"
                />
                <TextFieldGroup
                  placeholder="Time"
                  name="time"
                  // value={this.state.company}
                  // onChange={this.onChange}
                  // error={errors.company}
                  info="An approximate length of time that it may take"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NeedHelp;
