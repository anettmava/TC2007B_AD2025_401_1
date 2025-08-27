// if you want to use web install the following:
// npx expo install react-dom react-native-web @expo/metro-runtime

// if you want to run this project remember to do first
// npm install


// COMPONENTS!
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy } from './classes/DoggyComponent';
import RequestFunction from './classes/RequestFunction';

// Components codewise can be defined through a
// function or through a class
export default function App() {

  // JSX 
  // https://legacy.reactjs.org/docs/introducing-jsx.html
  return (
    <View style={styles.container}>
      {/*
      <Text>Open up App.tsx to start working on your app! HI HELLO</Text>
      <ClassExample alias="HEY GUYS" />
      <Doggy alias="Solovino" age={6} />
      */}
      <RequestFunction url="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json" />
      <StatusBar style="auto" />
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
