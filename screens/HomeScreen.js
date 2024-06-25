import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors'; 

export default function HomeScreen(props) {
  const [enteredText, setEnteredText] = useState('');
  const [resultText, setResultText] = useState('Algumas Traduções');
  
  return (  
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => props.navigation.navigate('languageSelect',  {title: "Translate From"})}
          >
          <Text style={styles.languageOptionText}>English</Text>
        </TouchableOpacity>

        <View style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={24} color={colors.lightGrey} />
        </View>

        <TouchableOpacity
          style={styles.languageOption}
          onPress={() => props.navigation.navigate('languageSelect',  {title: "Translate to"})}
        >
          <Text style={styles.languageOptionText}>Português</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          multiline
          placeholder="Enter text"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />

        <TouchableOpacity
          desable={enteredText === ''}
          style={styles.iconContainer}>
          <FontAwesome5 
            name="arrow-circle-right" 
            size={24} 
            color={enteredText !== "" ? colors.primary  : colors.primaryDisabled} />
        </TouchableOpacity>
      </View>

      <View styles={styles.resultContainer}>
        <Text style={styles.resultText}>{resultText}</Text>

        <TouchableOpacity
          desable={resultText === ''}
          style={styles.iconContainer2}>
          <MaterialIcons 
            name="content-copy" 
            size={24} 
            color={resultText !== "" ? colors.textColor  : colors.textColorDisable} />
        </TouchableOpacity>
      </View>

      <View style={styles.historyContainer}>

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
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontFamily: 'medium',
    letterSpacing: 0.3,
    height: 90,
    color: colors.textColor,
  },
  iconContainer: {
    paddingHorizontal: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer2: {
    paddingHorizontal: 10,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resultContainer: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
  
  },
  resultText: {
    fontFamily: 'medium',
    letterSpacing: 0.3,
    color: colors.primary,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  historyContainer: {
    backgroundColor: colors.greyBackground,
    flex: 1,
    padding: 10,
  },
});
