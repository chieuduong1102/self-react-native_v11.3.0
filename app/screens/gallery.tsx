import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const images = [
    { id: '1', uri: 'https://via.placeholder.com/150' },
    { id: '2', uri: 'https://via.placeholder.com/150' },
    { id: '3', uri: 'https://via.placeholder.com/150' },
    { id: '4', uri: 'https://via.placeholder.com/150' },
];

export const GalleryScreen = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Gallery', // Tiêu đề màn hình
            headerBackTitle: 'Go Back', // Text của nút Back
        });
    }, [navigation]);

    const renderItem = ({ item }: { item: { id: string; uri: string } }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gallery</Text>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    list: {
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        margin: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
});

export default GalleryScreen;