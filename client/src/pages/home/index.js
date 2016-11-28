import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {helloWorldAction} from '../../store/actions';
import {Logout} from '../../components/logout';

const mapStateToProps = (state) => ({
  world: state.helloWorld.world,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  onHelloClick: () => dispatch(helloWorldAction()),
  navToLogin: () => dispatch(push('/login')),
});

const Home = ({onHelloClick, navToLogin, world, token}) => {

  if (!token) {
    // TODO: figure out a better way to do nav
    setImmediate(() => navToLogin());
  }

  return (<div className="jumbotron">
    <Logout />
    <h1>Hello {world}!</h1>
    <button className="btn btn-default" onClick={onHelloClick}>Click me!</button>
    <div>
      <Link to="/other">other</Link>
    </div>
  </div>);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
