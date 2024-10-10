import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

const YourImage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            <Image
                style={styles.image}
                source={require('../assets/monbrian.png')}
                resizeMode={FastImage.resizeMode.contain}
                onLoad={() => setLoading(false)}
                onError={() => {
                    setLoading(false);
                    setError(true);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
    },
    image: {
        width: 80,
        height: 8A0,
    },
});

export default YourImage;
