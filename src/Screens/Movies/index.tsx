import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  getMovies,
  addFavorite,
  removeFavorite,
} from '../../redux/Actions/movies';
import {
  Container,
  Content,
  ContentImage,
  ListMovies,
  TitlePage,
  Wrapper,
  Image,
  ContentTitle,
  TitleMovie,
  ContentIcon,
  VoteCount,
  Button,
} from './styles';

const Movies = () => {
  const {movies, favorites} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  const addToFavorites = movie => dispatch(addFavorite(movie));
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies);

  const handleAddFavorite = movie => {
    addToFavorites(movie);
  };

  const handleRemoveFavorite = movie => {
    removeFromFavorites(movie);
  };

  const exists = movie => {
    if (favorites.filter(item => item.id === movie.id).length > 0) {
      return true;
    }

    return false;
  };

  return (
    <Container style={{paddingHorizontal: 20}}>
      <TitlePage>Marvel Movies</TitlePage>
      <Content>
        <ListMovies
          data={movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const IMAGE_URL =
              'https://image.tmdb.org/t/p/w185' + item.poster_path;
            return (
              <Wrapper style={{marginVertical: 12}}>
                <ContentImage>
                  <Image
                    source={{
                      uri: IMAGE_URL,
                    }}
                    resizeMode="cover"
                  />
                  <ContentTitle>
                    <Wrapper>
                      <TitleMovie>
                        {item.original_title} {item.original_name}
                      </TitleMovie>
                    </Wrapper>
                    <ContentIcon>
                      <MaterialIcons color="green" name="thumb-up" size={32} />
                      <VoteCount>{item.vote_count}</VoteCount>
                      <Button
                        onPress={() =>
                          exists(item)
                            ? handleRemoveFavorite(item)
                            : handleAddFavorite(item)
                        }
                        activeOpacity={0.7}>
                        <MaterialIcons
                          color="orange"
                          size={32}
                          name={exists(item) ? 'favorite' : 'favorite-outline'}
                        />
                      </Button>
                    </ContentIcon>
                  </ContentTitle>
                </ContentImage>
              </Wrapper>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};

export default Movies;
