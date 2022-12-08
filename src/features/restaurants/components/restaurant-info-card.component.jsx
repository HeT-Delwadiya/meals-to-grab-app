import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Image, View } from "react-native";

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

const Ratings = styled.View`
       flex-direction: row;
       padding-left: ${(props) => props.theme.space['4']};
       padding-top: ${(props) => props.theme.space['4']};
       padding-bottom: ${(props) => props.theme.space['4']};
`;

const Section = styled.View`
       justify-content: space-between;
       flex-direction: row;
       align-items: center;
`;

const Details = styled.View`
       flex-direction: row;
       padding-left: ${(props) => props.theme.space['4']};
       padding-top: ${(props) => props.theme.space['4']};
       padding-bottom: ${(props) => props.theme.space['4']};
`;


function RestaurantInfoCard({restaurant = {}}) {
       const {
              name = "Tatva Pure Veg Restaurant",
              icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
              photos = [
                     "https://www.buzizihost.com/wp-content/uploads/2019/04/fun-restaurant-promotion-ideas-keziz.jpg",
              ],
              address = "100 Balewadi High Street",
              ratings = 4.2,
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
                                   <Section>
                                          <Ratings>
                                                 {Array.from(Array(Math.floor(ratings))).map(() => <SvgXml xml={star} width="20px" height="20px" />)}
                                          </Ratings>
                                          <Details>
                                                 {isOpenNow && <SvgXml xml={open} width="20px" height="20px" />}
                                                 {isClosed && <Text variant="label" style={{ color: "red" }}>CLOSED TEMPORARILY</Text>}
                                                 <Image style={{ width: 15, height: 15, marginLeft: 10 }} source={{ uri: icon }} />
                                          </Details>
                                   </Section>
                                   <Address>
                                          {address}
                                   </Address>
                            </Info>
                     </Card.Content>
              </RestaurantCard>
       );
}

export default RestaurantInfoCard;