import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { DoggyRow } from './DoggyComponent';

// reminder: the body of the functional component is the same as the render() method
export default function RequestFunction(props: any) {

    // https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json

    // JSON ???
    // javascript object notation

    // used to model data
    // such as xml, yaml, etc

    // all data is expressed in tuples made up of name:value

    // you also have structures
    // objects {}
    // arrays []

    // {"name":"juan", "age": 20}
    // [2, 3, 4]

    // {"name":"maria", "grades":[90, 80, 70]}
    /*
    [
        {"marca":"bmw","modelo":"x6","anio":2020},
        {"marca":"mazda","modelo":"cx5","anio":2018},
        {"marca":"volkswagen","modelo":"beetle","anio":2000}
    ]
    [
        {"name":"maria", "grades":[90, 80, 70]},
        {"name":"martha", "grades":[90, 80, 70]},
        {"name":"joaquin", "grades":[90, 80, 70]}
    ]
*/

    const[data, setData] = useState([]);

    // do a request, get a list of items, display list of items

    // do a request
    // async ? 
    // - code that will not block the execution of the main logic flow
    // - also, it will run using some kind of parallel mechanism
    // - it takes an undetermined amount of time to complete
    async function request() {

        // do a request to a url and parse the result into a json
        // we have 3 ways to deal with async invokations 
        // - just invoke it and hope it works
        // - use "await" and simply wait for it to finish. IMPORTANT: only works within another asyn function
        // - subscribe callback logic to the promise so it invokes something when its done
        var response = await fetch(props.url);
        var json = await response.json();
        console.log(json);
        console.log(json[1]);
        console.log(json[1]['modelo']);
        setData(json);
    }

    // how to fix it? with hooks!
    useEffect(() => {
        request();

        // you can also return a function here for cleanup
    }, []);

    

    return (
        <View>
        {/*
        <FlatList 
            data={[
                {name: "Perrito1", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"},
                {name: "Perrito2", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"},
                {name: "Perrito3", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"}
            ]}
            renderItem={({item}) => {
                return (

                    <Pressable 
                        onPress={() => {
                            alert("DON'T PRESS THE PUPPY.");
                        }}
                    >
                        <DoggyRow name={item.name} uri={item.uri} />
                    </Pressable>
                );
            }}
        />
        */}
            <View>
                {
                    data.length > 0 ?
                        <FlatList 
                            data={data}
                            renderItem={({item}) => {
                                return (
                                    <View>
                                        <Text>{item['marca']}</Text>
                                        <Text>{item['modelo']}</Text>
                                        <Text>{item['anio']}</Text>
                                    </View>
                                );
                            }}
                        />
                    :
                        <ActivityIndicator size="large" />
                }
            </View>
        </View>
    );
}
