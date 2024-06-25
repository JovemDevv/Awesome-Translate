import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import colors from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={props.color || colors.primary}
    />
  );

}

export default function LanguageSelectScreen({ navigation, route }) {
  const params = route.params || {};
  const { title } = params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            iconName="close"
            color={colors.textColor}
            onPress={() => navigation.goBack()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Language Select Screen screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
