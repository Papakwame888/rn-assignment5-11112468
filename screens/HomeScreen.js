import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <ProfileSection>
          <ProfileImage source={{ uri: 'https://via.placeholder.com/40' }} />
          <WelcomeMessage>
            <Text>Welcome,</Text>
            <UserName>John Doe</UserName>
          </WelcomeMessage>
        </ProfileSection>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color={isDarkTheme ? 'white' : 'black'} />
        </TouchableOpacity>
      </Header>

      <MasterCard source={require('./assets/Card.png')} />

      <IconsRow>
        <IconContainer>
          <Ionicons name="send" size={24} color={isDarkTheme ? 'white' : 'black'} />
          <Text>Send</Text>
        </IconContainer>
        <IconContainer>
          <Ionicons name="download" size={24} color={isDarkTheme ? 'white' : 'black'} />
          <Text>Receive</Text>
        </IconContainer>
        <IconContainer>
          <Ionicons name="cash" size={24} color={isDarkTheme ? 'white' : 'black'} />
          <Text>Loan</Text>
        </IconContainer>
        <IconContainer>
          <Ionicons name="card" size={24} color={isDarkTheme ? 'white' : 'black'} />
          <Text>Top Up</Text>
        </IconContainer>
      </IconsRow>

      <TransactionsSection>
        <SectionTitle>Transactions</SectionTitle>
        <ScrollView>
          {['Apple Store', 'Spotify', 'Money Transfer', 'Grocery'].map((item, index) => (
            <TransactionItem key={index}>
              <TransactionDetails>
                <Ionicons name="logo-apple" size={24} color={isDarkTheme ? 'white' : 'black'} />
                <Text>{item}</Text>
              </TransactionDetails>
              <Text>$10.00</Text>
            </TransactionItem>
          ))}
        </ScrollView>
      </TransactionsSection>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const WelcomeMessage = styled.View`
  margin-left: 10px;
`;

const UserName = styled.Text`
  font-weight: bold;
`;

const MasterCard = styled.Image`
  width: 100%;
  height: 150px;
  margin: 20px 0;
`;

const IconsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const IconContainer = styled.View`
  align-items: center;
`;

const TransactionsSection = styled.View`
  flex: 1;
  margin-top: 20px;
`;

const SectionTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TransactionItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => (props.theme.isDarkTheme ? 'white' : 'black')};
`;

const TransactionDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default HomeScreen;
