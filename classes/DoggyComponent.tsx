import { useState } from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';

// we are going to define a component through a function
// IMPORTANT NOTE: the body of the function is equivalent 
// to the render function in a class based component
export function Doggy(props: any) {

    // STATE
    // hooks
    // logic that enables functionality beyond the scope of
    // the render() method (such as declaring a state variable)

    const[isHappy, setIsHappy] = useState(false);
    const[count, setCount] = useState(0);
    const[testInput, setTestInput] = useState("");
    console.log("DOGGY RENDER");

    return(
        <View>
            <Text>WOOF. {props.alias} {props.age} I'M {isHappy? "HAPPY :D" : "SAD :("}</Text>
            <Text>Today's bark count: {count}</Text>
            <Text>some input: {testInput}</Text>
            <Button 
                title='HAPPINNESS SWAPPER'
                onPress={() => {
                    setIsHappy(!isHappy);
                }}
            />
            <Button 
                title='BARK FOR NO REASON'
                onPress={() => {
                    setCount(count + 1);
                }}
            />
            <TextInput 
                placeholder='TEXT INPUT TEST'
                onChangeText={text => {
                    setTestInput(text);
                }}
            />
        </View>
    );
}

export function DoggyRow(props: any) {
    return (
        <View>
            <Text>My name is: {props.name}</Text>
            <Image 
                source={{uri: props.uri}}
                style={{width: 100, height: 100}}
            />
        </View>
    );
}