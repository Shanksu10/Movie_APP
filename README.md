# Movie_App

## Description

This app provides to visitors a list of movies (photos + titles), they can consult each of them. When consulting, the visitor will be directed to the movie page which contain a lot of information of it like IMDB score, description ...

## Stacks

Webpack, Typescript, Sass, React, React Dom, Redux, Toolkit, Axios, Bootstrap.

## Architecture

The root is the App component which contain: Header, Router and Footer components.

The router logic is inside the Router component where we have: Home, MovieDetails and 404 (page not found) components.

Inside the Home component we have a MovieListing component. The MovieListing component contains the MovieCard components.

We use OMDb api for data implementation.
