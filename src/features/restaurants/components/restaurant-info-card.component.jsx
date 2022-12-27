import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { RestaurantCard, RestaurantCardCover, Address, Info, Ratings, Section, Details, Icon } from "./restaurant-info-card.styles";
import { Text } from "../../../components/typography/text.component";

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
              isClosedTemporarily = false
       } = restaurant;

       return (
              <RestaurantCard>
                     <Card.Content>
                            <RestaurantCardCover source={{ uri: photos[0] }} />
                            <Info>
                                   <Text variant="label">
                                          {name}
                                   </Text>
                                   <Section>
                                          <Ratings>
                                                 {Array.from(Array(Math.floor(ratings))).map(() => <SvgXml xml={star} width="20px" height="20px" />)}
                                          </Ratings>
                                          <Details>
                                                 {isOpenNow && <SvgXml xml={open} width="20px" height="20px" />}
                                                 {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
                                                 <Icon source={{ uri: icon }} />
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