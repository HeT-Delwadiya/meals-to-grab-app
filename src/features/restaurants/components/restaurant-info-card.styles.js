import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
       width: 15px;
       height: 15px;
       margin-left: 10px;
`;

export const RestaurantCard = styled(Card)`
       background-color: ${(props) => props.theme.colors.ui.whiteSmoke};
`;

export const RestaurantCardCover = styled(Card.Cover)`
       background-color: ${(props) => props.theme.colors.ui.whiteSmoke};
`;

export const Address = styled.Text`
       font-family: ${(props) => props.theme.fonts.body};
       font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
       padding-left: ${(props) => props.theme.space['4']};
       padding-top: ${(props) => props.theme.space['16']};
`;

export const Ratings = styled.View`
       flex-direction: row;
       padding-left: ${(props) => props.theme.space['4']};
       padding-top: ${(props) => props.theme.space['4']};
       padding-bottom: ${(props) => props.theme.space['4']};
`;

export const Section = styled.View`
       justify-content: space-between;
       flex-direction: row;
       align-items: center;
`;

export const Details = styled.View`
       flex-direction: row;
       padding-left: ${(props) => props.theme.space['4']};
       padding-top: ${(props) => props.theme.space['4']};
       padding-bottom: ${(props) => props.theme.space['4']};
`;