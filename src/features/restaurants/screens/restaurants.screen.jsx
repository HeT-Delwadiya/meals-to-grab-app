import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
       padding: ${(props) => props.theme.space["16"]};
`;

const RestaurantList = styled(FlatList).attrs({
       contentContainerStyle: {
              padding: 16,
       },
})``;

function RestaurantsScreen(props) {
       const { isLoading, error, restaurants } = useContext(RestaurantsContext);
       
       return (
              <SafeArea>
                     <SearchContainer>
                            <Searchbar placeholder="Search" />
                     </SearchContainer>
                     <RestaurantList
                            data={restaurants}
                            renderItem={({ item }) => (
                                   <Spacer position="bottom" size="large">
                                          <RestaurantInfoCard  restaurant={item} />
                                   </Spacer>
                            )}
                            keyExtractor={(item) => item.name}
                     />
              </SafeArea>
       );
}

export default RestaurantsScreen;