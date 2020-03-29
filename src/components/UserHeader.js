import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    if (!this.props.user) return null;
    // console.log(this.props.user);
    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);
  return { user: user };
};

// const mapFunctionToProps = () => {};

export default connect(mapStateToProps)(UserHeader);
