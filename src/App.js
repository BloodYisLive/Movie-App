import { useState } from "react";
import MovieComponent from "./components/MovieComponent";
import styled from "styled-components";
import axios from "axios";
import MovieInfoComponent from "./components/MovieInfoComponent";

export const API_KEY = "2db82ffc";
function App() {
  const [SearchQuery, setSearchQuery] = useState();
  const [timeOut, setTimeOut] = useState();
  const [movieList, setMovieList] = useState([]);
  const [movieSelect, setMovieSelect] = useState();
  const FetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    setMovieList(response.data.Search);
  };

  const OnTextChange = (e) => {
    clearTimeout(timeOut);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(() => {
      FetchData(e.target.value);
    }, 500);
    setTimeOut(timeout);
  };
  return (
    <>
      <Header>
        <Logo>
          <AppLogo src='/movie_icon.png' />
          <AppName>Movie App</AppName>
        </Logo>
        <SearchBar>
          <SearchIcon src='/search-icon.svg' />
          <SearchInput
            placeholder='Search movie...'
            value={SearchQuery}
            onChange={OnTextChange}
          />
        </SearchBar>
      </Header>
      {movieSelect && (
        <MovieInfoComponent
          movieSelect={movieSelect}
          setMovieSelect={setMovieSelect}
        />
      )}
      <MovieContainer>
        {movieList?.length
          ? movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                setMovieSelect={setMovieSelect}
              />
            ))
          : "No Movie Searched"}
      </MovieContainer>
    </>
  );
}

export default App;
const MovieContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  box-shadow: 0 3px 6px 0 #555;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AppLogo = styled.img`
  width: 48px;
  height: 48px;
  //margin: 1rem;
`;
const AppName = styled.span`
  font-size: 1.4rem;
  margin-left: 10px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  padding: 4px;
  width: 50%;
`;
const SearchIcon = styled.img`
  height: 1.8rem;
`;
const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  margin-left: 10px;
  border: none;
  outline: none;
`;
