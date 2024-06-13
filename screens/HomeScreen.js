import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (  
      <View style={styles.container}>
        <Text>Home screen</Text>

        <Button title= 'Clickme' onPress={() =>{
          useLinkProps.navigation.natigate("screen2")
        }} />
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
