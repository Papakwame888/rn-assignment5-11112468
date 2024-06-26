import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

const Tab = createBottomTabNavigator();

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  card: '#f8f9fa',
};

const darkTheme = {
  background: '#000000',
  text: '#ffffff',
  card: '#333333',
};

const AppNavigator = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'My Card') {
                iconName = 'card';
              } else if (route.name === 'Statistics') {
                iconName = 'stats-chart';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Card" component={() => null} />
          <Tab.Screen name="Statistics" component={() => null} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;


