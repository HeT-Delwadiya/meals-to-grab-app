import React from "react";
import { SafeAreaView, FlatList, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const SafeArea = styled(SafeAreaView)`
       flex: 1;
       ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
       background-color: ${(props) => props.theme.colors.ui.secondary};
`;

const SearchContainer = styled.View`
       padding: ${(props) => props.theme.space["16"]};
`;

const RestaurantList = styled(FlatList).attrs({
       contentContainerStyle: {
              padding: 16,
       },
})``;

function RestaurantsScreen(props) {
       return (
              <SafeArea>
                     <SearchContainer>
                            <Searchbar placeholder="Search" />
                     </SearchContainer>
                     <RestaurantList
                            data={[
                                   { id: 1 },
                                   { id: 2 },
                                   { id: 3 },
                                   { id: 4 },
                                   { id: 5 },
                                   { id: 6 },
                                   { id: 7 },
                                   { id: 8 },
                                   { id: 9 },
                                   { id: 10 },
                                   { id: 11 },
                                   { id: 12 },
                                   { id: 13 },
                                   { id: 14 },
                            ]}
                            renderItem={() => (
                                   <Spacer position="bottom" size="large">
                                          <RestaurantInfoCard />
                                   </Spacer>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                     />
              </SafeArea>
       );
}

export default RestaurantsScreen;