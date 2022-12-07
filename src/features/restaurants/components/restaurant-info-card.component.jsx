import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
       background-color: ${(props) => props.theme.colors.ui.whiteSmoke};
`;

const RestaurantCardCover = styled(Card.Cover)`
       
       background-color: ${(props) => props.theme.colors.ui.whiteSmoke};
`;

const Address = styled(Text)`
       font-family: ${(props) => props.theme.fonts.body};
       font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
       font-family: ${(props) => props.theme.fonts.heading};
       font-size: ${(props) => props.theme.fontSizes.body};
       color: ${(props) => props.theme.colors.ui.primary};
       padding-bottom: ${(props) => props.theme.space['4']};
`;

const Info = styled.View`
       padding-left: ${(props) => props.theme.space['4']};
       padding-top: ${(props) => props.theme.space['16']};
`;

function RestaurantInfoCard({restaurant = {}}) {
       const {
              name = "Tatva Pure Veg Restaurant",
              icon,
              photos = [
                     "https://www.buzizihost.com/wp-content/uploads/2019/04/fun-restaurant-promotion-ideas-keziz.jpg",
              ],
              address = "100 Balewadi High Street",
              ratings = 4,
              isOpenNow = true,
              isClosed = false
       } = restaurant;

       return (
              <RestaurantCard>
                     <Card.Content>
                            <RestaurantCardCover source={{ uri: photos[0] }} />
                            <Info>
                                   <Title>
                                          {name}
                                   </Title>
                                   <Address>
                                          {address}
                                   </Address>
                            </Info>
                     </Card.Content>
              </RestaurantCard>
       );
}

export default RestaurantInfoCard;