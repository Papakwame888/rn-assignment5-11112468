import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <HeaderTitle>Settings</HeaderTitle>
      </Header>

      <OptionsList>
        {['Language', 'Profile', 'Contact Us', 'Change Password', 'Privacy Policy'].map((item, index) => (
          <OptionItem key={index}>
            <OptionText>{item}</OptionText>
            <Ionicons name="chevron-forward" size={24} color={isDarkTheme ? 'white' : 'black'} />
          </OptionItem>
        ))}
        <OptionItem>
          <OptionText>Theme</OptionText>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </OptionItem>
      </OptionsList>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.View`
  margin-bottom: 20px;
`;

const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const OptionsList = styled.View`
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.text};
`;

const OptionItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.text};
`;

const OptionText = styled.Text`
  color: ${(props) => props.theme.text};
`;

export default SettingsScreen;
