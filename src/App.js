import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LikedMovies from './commponents/likeList';
import Movies from "./commponents/movies";
import DisLikedMovies from "./commponents/discardList";
import NavBar from "./commponents/common/navBar";
import NotFound from "./commponents/notFound";
import MovieDetail from "./commponents/movieDetail";

import './App.css';

function App() {
  return (
    <React.Fragment>
        <NavBar/>
        <main className="container">
        <Switch>
            <Route path="/movies/:id" component={MovieDetail} />
            <Route path="/movies" component={Movies} />
            <Route path="/likelist" component={LikedMovies} />
            <Route path="/discardlist" component={DisLikedMovies} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
  );
}

export default App;
