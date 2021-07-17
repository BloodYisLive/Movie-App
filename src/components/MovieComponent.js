import React from "react";
import styled from "styled-components";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    <>
      <MovieContainer
        onClick={() => {
          props.setMovieSelect(imdbID);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <MovieImage src={Poster} alt={Title} />
        <MovieName>{Title}</MovieName>
        <MovieInfo>
          <MovieReleaseYear>Year: {Year}</MovieReleaseYear>
          <MovieType>Type: {Type}</MovieType>
        </MovieInfo>
      </MovieContainer>
    </>
  );
};

export default MovieComponent;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 280px;
  padding: 10px;
  cursor: pointer;
  margin: 1rem;
`;
const MovieImage = styled.img`
  height: 362px;
  object-fit: cover;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin: 1rem 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MovieReleaseYear = styled.span``;
const MovieType = styled.span``;
