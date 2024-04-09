import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView
} from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light'
    return(
        // <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.darkText : styles.whitecolor}>
                    Hello, World
                    </Text>
            </View>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    whitecolor: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;