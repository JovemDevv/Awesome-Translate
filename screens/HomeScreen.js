import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/colors'; 

export default function HomeScreen(props) {
  const navigation = useNavigation();

  return (  
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => console.log('Pressed')}
          >
          <Text style={styles.languageOptionText}>English</Text>
        </TouchableOpacity>

        <View style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={24} color={colors.lightGrey} />
        </View>

        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => console.log('Pressed')}
        >
          <Text style={styles.languageOptionText}>Português</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  languageContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  languageOption: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  arrowContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageOptionText: {
    color: colors.primary,
    fontFamily: 'medium',
    letterSpacing: 0.3,
  },
});
