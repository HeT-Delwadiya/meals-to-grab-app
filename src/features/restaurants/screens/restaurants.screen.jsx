import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
       flex: 1;
       margin-top: ${StatusBar.currentHeight}px;
       background-color: ${(props) => props.theme.colors.ui.secondary};
`;

const SearchContainer = styled.View`
       padding: ${(props) => props.theme.space['16']};
`;

const RestaurantListContainer = styled.View`
       flex: 1;
       padding: ${(props) => props.theme.space['16']};
`;

function RestaurantsScreen(props) {
       return (
              <>
                     <SafeArea>
                            <SearchContainer>
                                   <Searchbar placeholder="Search" />
                            </SearchContainer>
                            <RestaurantListContainer>
                                   <RestaurantInfoCard />
                            </RestaurantListContainer>
                     </SafeArea>
              </>
       );
}

export default RestaurantsScreen;