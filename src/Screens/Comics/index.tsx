import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getCharacters} from '../../redux/Actions/marvel';
import {Container, TitlePage, VoteCount, Wrapper} from './styles';
import {
  ListMovies,
  Content,
  ContentImage,
  Image,
  ContentTitle,
  TitleMovie,
  ContentIcon,
} from '../Movies/styles';

const Comics = () => {
  const {characters} = useSelector(state => state.marvelReducers);
  const dispatch = useDispatch();
  const fetchCharacters = () => dispatch(getCharacters());

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Container style={{paddingHorizontal: 20}}>
      <TitlePage>Marvel Comics</TitlePage>
      <Content>
        <ListMovies
          data={characters}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const IMAGE_URL = `${item?.thumbnail?.path}.${item.thumbnail.extension}`;
            return (
              <Wrapper style={{marginVertical: 12}}>
                <ContentImage>
                  <Image
                    source={{
                      uri: 'a',
                    }}
                    resizeMode="cover"
                  />
                  <ContentTitle>
                    <Wrapper>
                      <TitleMovie>{item.name}</TitleMovie>
                    </Wrapper>
                    <ContentIcon>
                      <VoteCount>{IMAGE_URL}</VoteCount>
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

export default Comics;
