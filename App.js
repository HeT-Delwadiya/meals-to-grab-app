import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ThemeProvider } from "styled-components";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme/index";
import {
       useFonts as useOswald,
       Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ICONS } from "./src/components/utils/icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./src/components/utils/safe-area.component";
import { Text } from "./src/components/typography/text.component";

export default function App() {
       
       const [oswaldLoaded] = useOswald({
              Oswald_400Regular,
       });

       const [latoLoaded] = useLato({
              Lato_400Regular,
       });

       if (!oswaldLoaded || !latoLoaded) {
              return null;
       }
       
       const Tab = createBottomTabNavigator();
       
       const SettingsScreen = () => (
              <SafeArea>
                     <Text>Settings</Text>
              </SafeArea>
       );
            
       const MapScreen = () => (
              <SafeArea>
                     <Text>Map</Text>
              </SafeArea>
       );
       
       const createScreenOptions = ({ route }) => {
              const iconName = ICONS[route.name];
              return {
                     tabBarIcon: ({ size, color }) => (
                            <Ionicons name={iconName} size={size} color={color} />
                     ),
                     tabBarActiveTintColor: "#4c00b0",
                     tabBarInactiveTintColor: "gray",
                     tabBarLabelStyle: {paddingBottom: 5},
                     tabBarStyle: [
                            {
                                   display: "flex",
                                   marginBottom: 5
                            }
                     ],
              };
       };

       return (
              <>
                     <ThemeProvider theme={theme}>
                            <NavigationContainer>
                                   <Tab.Navigator screenOptions={createScreenOptions} >
                                          <Tab.Screen name="Restaurants" component={RestaurantsScreen} options={{ headerShown: false }} />
                                          <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
                                          <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
                                   </Tab.Navigator>
                            </NavigationContainer>
                     </ThemeProvider>
                     <ExpoStatusBar style="auto" />
              </>
       );
}