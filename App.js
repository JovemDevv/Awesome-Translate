import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SavedScreen from './screens/SavedScreen';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect, useCallback } from 'react';
import * as Font from 'expo-font';
import colors from './utils/colors'; 
import LanguageSelectScreen from './screens/LanguageSelectScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();
  
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: 'Home', 
          tabBarIcon: (props) => {
            return(<FontAwesome name="home" size={props.size} color={props.color} />)
          }
        }}
      />
      <Tab.Screen 
        name="Saved" 
        component={SavedScreen} 
        options={{ 
          tabBarLabel: 'Saved',
          tabBarIcon: (props) => {
            return(<FontAwesome name="star" size={props.size} color={props.color} />)
          }
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ 
          tabBarLabel: 'Settings',
          tabBarIcon: (props) => {
            return(<Ionicons name="settings" size={props.size} color={props.color} />)
          }
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try{
        await Font.loadAsync({
          black: require("./assets/fonts/Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
        setAppIsLoaded(true);
      }
      catch (e) {
        console.log(e);
      }
      finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }} onLayout={onLayout}>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontFamily: 'black',
              color: 'white',
            },
            headerStyle: {
              backgroundColor: colors.primary 
            },
          }}
        >
          <Stack.Group>
            <Stack.Screen 
              name="main" 
              component={TabNavigator}
              options={{ headerTitle: 'Awesome Translate' }}
            />
          </Stack.Group>

          <Stack.Group
            screenOptions={{
              presentation: 'containedModal',
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTitleStyle: {
                color: colors.textColor,
                fontFamily: 'black'
              },
            }}
          >
            <Stack.Screen 
              name="languageSelect" 
              component={LanguageSelectScreen} 
            />
          </Stack.Group>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
