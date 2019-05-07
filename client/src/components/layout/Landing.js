import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">
                    Are you bored or need help?
                  </h1>
                  <p className="lead">
                    {" "}
                    Create a lacee profile, click bored or need help, and get
                    laceedup.
                  </p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container about">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">About Lacee</h1>
            </div>

            <p>
              Connection is the primary driver of human interaction. Lacee is
              simply a means for this basic need. Whether you need help with a
              project, homework, or anything else, Lacee is your solution. Post
              a bubble on Lacee and get "laceed up" with other members on your
              campus that have the skills required for what you need. On Lacee,
              you will be able to message, video chat, and get suggestions for
              nearby meet up locations to collaborate. You will also be able to
              conduct monetary transactions with each other over Lacee's secure
              payment system. During the sign up process, you will be asked to
              create a Lacee profile outlining your skills, classes taken, and
              any other information that can help verify your skillset for
              getting "laceed up" with other members.
            </p>

            <p>
              <strong>
                *Lacee is currently in beta testing and not all functions are
                available at this time. Feel free to email{" "}
                <a className="email" href="mailto:shaindllc@gmail.com">
                  shaindllc@gmail.com
                </a>{" "}
                to report any bugs/fixes or suggestions.
              </strong>
            </p>

            <p className="thanks">
              <strong>
                Thank you beta laceers for being part of this amazing Lacee
                experience.
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
