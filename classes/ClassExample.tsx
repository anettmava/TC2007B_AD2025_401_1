// defining a component through a class
// reason - examine the component's lifecycle 

import { Component, ErrorInfo } from 'react';
import { Text, View, Button } from 'react-native';

// lifecycle???
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// generics / templates

// contract?!?! - the definition of a class

export class ClassExample extends Component<{alias: string}, {alias: string, count: number}> {


    // PROPS - properties, variables that we get from the outside
    // as arguments to be used in our components

    // STATE - inner variables, similar in concept to instance variables
    // with the difference that they can trigger a redraw.

    constructor(props: any) {
        super(props);
        console.log("CONSTRUCTOR");

        // declaring the state object in class based components
        // done only once in the constructor
        this.state = {alias: props.alias, count: 0};
    }

    // REQUIRE METHOD FOR A COMPONENT REACT
    // the actual drawing part
    // returns a ui node
    render() {

        console.log("RENDER");

        return(
            <View>
                <Text>HEY I'M A COMPONENT! {this.state.alias}</Text>
                <Text>A PROP: {this.props.alias}</Text>
                <Text>Current count: {this.state.count}</Text>
                <Button 
                    title='INCREMENT COUNT'
                    onPress={() => {
                        // hey! this is an anonymous function
                        this.setState((state) => {
                            return {count: state.count + 1};
                        });
                    }}
                />
            </View>
        );
    }

    componentDidMount(): void {
        console.log("COMPONENT DID MOUNT");
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("COMPONENT DID UPDATE");
    }

    componentWillUnmount(): void {
        console.log("COMPONENT WILL UNMOUNT");
    }
}