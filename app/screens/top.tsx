import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ResponseAPIDisplay } from '../../components/ResponseAPIDisplay'; // Adjust the path to the correct location
export const TopScreen = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'TOP', // Tiêu đề màn hình
            headerBackTitle: 'Go Back', // Text của nút Back
        });
    }, [navigation]);

    const [responseData, setResponseData] = useState(null);

    const handleGetRequest = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            console.error('GET request error:', error);
        }
    };

    const handlePostRequest = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
            });
            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            console.error('POST request error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Call GET API" onPress={handleGetRequest} />
            <Button title="Call POST API" onPress={handlePostRequest} />
            {responseData && <ResponseAPIDisplay data={responseData} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    responseContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    responseText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default TopScreen;