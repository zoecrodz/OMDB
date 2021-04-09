import React from "react"
import Navbar from "./Navbar"
// import Register from "./Register";
import { Route, Switch } from "react-router-dom";
import MoviesContainer from "./MoviesContainer"
// import Login from "../containers/Login"
import SingleMovie from "./SingleMovie"

const Main = () => {
  return (
    <div>
            <Navbar/>
            <Switch>
            <Route exact path="/" exact component={MoviesContainer} />
            <Route exact path="/movies/:movieId" render={({ match }) => <SingleMovie movieId={match.params.movieId} />}/>
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} /> */}
            </Switch>
    </div>
  );
};

export default Main;