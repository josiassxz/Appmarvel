import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  margin-top: ${RFValue(44)}px;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.shape};
  margin-top: 300px;
  font-size: 25px;
  font-family: ${({theme}) => theme.fonts.primary_600};
`;

export const TitlePage = styled.Text`
  font-size: ${RFValue(22)}px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${RFValue(12)}px;
`;

export const ListMovies = styled.FlatList`
  flex: 1;
  margin-top: ${RFValue(8)}px;
`;

export const Wrapper = styled.View``;

export const ContentImage = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(150)}px;
  border-radius: ${RFValue(10)}px;
`;

export const ContentTitle = styled.View`
  flex: 1;
  margin-left: ${RFValue(12)}px;
`;

export const TitleMovie = styled.Text`
  font-size: ${RFValue(22)}px;
  padding-right: ${RFValue(16)}px;
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(10)}px;
  align-items: center;
`;

export const VoteCount = styled.Text`
  font-size: ${RFValue(18)}px;
  padding-left: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.shape_dark};
`;

export const Button = styled.TouchableOpacity`
  margin-left: ${RFValue(14)}px;
  flex-direction: row;
  padding: 2px;
  border-radius: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
`;
