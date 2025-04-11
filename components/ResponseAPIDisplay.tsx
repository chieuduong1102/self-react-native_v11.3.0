import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ApiResponseModel } from '../models/ApiResponseModel';

interface ResponseAPIDisplayProps {
    data: ApiResponseModel;
}

export const ResponseAPIDisplay: React.FC<ResponseAPIDisplayProps> = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>API Response</Text>
            <Text style={styles.field}>User ID: {data.userId}</Text>
            <Text style={styles.field}>ID: {data.id}</Text>
            <Text style={styles.field}>Title: {data.title}</Text>
            <Text style={styles.field}>Body: {data.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    field: {
        fontSize: 16,
        marginBottom: 4,
        color: '#333',
    },
});

export default ResponseAPIDisplay;