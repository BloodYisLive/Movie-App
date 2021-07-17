import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_KEY } from "../App";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieSelect } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${movieSelect}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [movieSelect]);
  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} />
          <MovieInfoColumn>
            <MovieName>
              {movieInfo?.Type}: {movieInfo?.Title}
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{movieInfo.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{movieInfo.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{movieInfo.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{movieInfo?.Plot}</span>
            </MovieInfo>
          </MovieInfoColumn>
          <Close onClick={() => props.setMovieSelect()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};

export default MovieInfoComponent;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 30px;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const MovieInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin: 1rem 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: black;
`;
const MovieInfo = styled.span`
  margin: 4px 0;
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
