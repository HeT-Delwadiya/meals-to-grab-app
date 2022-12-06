import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

function RestaurantsScreen(props) {
       return (
              <>
                     <SafeAreaView style={styles.container}>
                            <View style={styles.search}>
                                   <Searchbar placeholder="Search" />
                            </View>
                            <View style={styles.list}>
                                   <RestaurantInfoCard />
                            </View>
                     </SafeAreaView>
              </>
       );
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
       container: {
              flex: 1,
              marginTop: StatusBar.currentHeight,
              backgroundColor: "#fff"
       },
       search: {
              padding: 16,
              backgroundColor: "#fff"
       },
       list: {
              flex: 1,
              padding: 16,
              backgroundColor: "#fff"
       },
});
