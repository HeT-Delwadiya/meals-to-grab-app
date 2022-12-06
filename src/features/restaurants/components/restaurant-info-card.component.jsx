import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

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
              <>
                     <Card style={styles.container} elevation={5}>
                            <Card.Content>
                                   <Card.Cover source={{uri: photos[0]}} />
                                   <View>
                                          <Title style={styles.title}>
                                                 {name}
                                          </Title>
                                          <Paragraph>
                                                 {address}
                                          </Paragraph>
                                   </View>
                            </Card.Content>
                     </Card>
              </>
       );
}

export default RestaurantInfoCard;

const styles = StyleSheet.create({
       container: {
              backgroundColor: "#F5F5F5",
       },
       title: {
              paddingTop: 8
       }
})
