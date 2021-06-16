import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoList from './Componants/TodoList'
import Header from './Componants/Header'
import UserVerification from './Componants/UserVerification'
import Logout from './Componants/Logout'
import SearchTask from './Componants/SearchTask'
import { connect } from 'react-redux'
import ErrorBoundary from './Componants/ErrorBoundary'

function App(props) {
  useEffect(() => {
    props.dispatchValueUserDetails();
  }, []);

  console.log(props.state);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ErrorBoundary>
                <UserVerification {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/TodoList"
            render={(props) => (
              <ErrorBoundary>
                <TodoList {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/Logout"
            render={(props) => (
              <ErrorBoundary>
                <Logout {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/SearchTask"
            render={(props) => (
              <ErrorBoundary>
                <SearchTask {...props} />
              </ErrorBoundary>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDisatchToProps = (dispatch) => {
  return {
    dispatchValueUserDetails: () =>
      dispatch({ type: "ONLOAD_PAGE_USER_DETAILS" })
  };
};

export default connect(mapStateToProps, mapDisatchToProps)(App);