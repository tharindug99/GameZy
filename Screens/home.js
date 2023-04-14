import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Home(){
    return(
        
        <View style={styles.container}>
            <View>
                <StatusBar 
                    backgroundColor="#000" // Set the background color of the status bar
                    barStyle="light-content" // Set the color of the status bar content to white
                    hidden={false} // Set whether the status bar should be hidden or not
                    translucent={false} // Set whether the status bar should be translucent or not
                />
            </View>
            
            <Text>
                Home Screen
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        fontSize: 80,
    }
});