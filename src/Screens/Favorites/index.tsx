import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {removeFavorite} from '../../redux/Actions/movies';

import {
  Description,
  TitlePage,
  Container,
  Wrapper,
  ListFavorites,
  Content,
  Align,
  FrontCover,
  BoxTitle,
  TitleMovieFavorite,
  VoteCount,
  Vote,
  RemoveItem,
} from './styles';

const Favorites = () => {
  const {favorites} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));
  const handleRemoveFavorite = movie => {
    removeFromFavorites(movie);
  };

  return (
    <Container>
      <TitlePage>Favorites</TitlePage>
      <Wrapper>
        {favorites.length === 0 ? (
          <Description>Add a movie to the list.</Description>
        ) : (
          <ListFavorites
            data={favorites}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              const IMAGE_URL =
                'https://image.tmdb.org/t/p/w185' + item.poster_path;

              return (
                <Content style={{marginVertical: 12}}>
                  <Align>
                    <FrontCover
                      source={{
                        uri: IMAGE_URL,
                      }}
                      resizeMode="cover"
                    />
                    <BoxTitle>
                      <Content>
                        <TitleMovieFavorite>
                          {item.original_title} {item.original_name}
                        </TitleMovieFavorite>
                      </Content>
                      <VoteCount>
                        <MaterialIcons
                          color="green"
                          name="thumb-up"
                          size={32}
                        />
                        <Vote
                          style={{
                            fontSize: 18,
                            paddingLeft: 10,
                            color: '#64676D',
                          }}>
                          {item.vote_count}
                        </Vote>
                        <RemoveItem
                          onPress={() => handleRemoveFavorite(item)}
                          activeOpacity={0.7}
                          style={{
                            marginLeft: 14,
                            flexDirection: 'row',
                            padding: 2,
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 40,
                            width: 40,
                          }}>
                          <MaterialIcons
                            color="orange"
                            size={32}
                            name="favorite"
                          />
                        </RemoveItem>
                      </VoteCount>
                    </BoxTitle>
                  </Align>
                </Content>
              );
            }}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Favorites;
