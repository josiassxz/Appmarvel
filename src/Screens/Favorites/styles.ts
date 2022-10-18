import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  margin-top: ${RFValue(44)}px;
  margin-left: ${RFValue(20)}px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
`;

export const TitlePage = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.primary_500};
`;

export const Wrapper = styled.View`
  flex: 1;
  margin-top: ${RFValue(8)}px;
`;

export const ListFavorites = styled.FlatList`
  flex: 1;
  margin-top: ${RFValue(8)}px;
`;

export const Content = styled.View``;

export const Align = styled.View`
  flex-direction: row;
`;

export const FrontCover = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(150)}px;
  border-radius: ${RFValue(10)}px;
`;

export const BoxTitle = styled.View`
  flex: 1;
  margin-left: ${RFValue(12)}px;
`;

export const TitleMovieFavorite = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  padding-right: ${RFValue(16)}px;
`;

export const VoteCount = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(10)}px;
  align-items: center;
`;

export const Vote = styled.Text`
  font-size: ${RFValue(18)}px;
  padding-left: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.vote};
`;

export const RemoveItem = styled.TouchableOpacity`
  margin-left: ${RFValue(14)}px;
  flex-direction: row;
  padding: ${RFValue(2)}px;
  border-radius: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
`;
