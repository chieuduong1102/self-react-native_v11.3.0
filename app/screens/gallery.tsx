import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GalleryItem } from '../../components/GalleryItem';

const images = [
    { id: '1', uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { id: '2', uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { id: '3', uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { id: '4', uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
];

export const GalleryScreen = () => {
    const navigation = useNavigation();
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const [numberSelected, setNumberSelected] = useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Gallery',
            headerBackTitle: 'Go Back',
        });
    }, [navigation]);

    const renderItem = ({ item }: { item: { id: string; uri: string } }) => (
        <GalleryItem
            item={item}
            quantities={quantities}
            setQuantities={setQuantities}
            setNumberSelected={setNumberSelected}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gallery</Text>
            <Text style={styles.lbImageSelected}>Your selected: {numberSelected}</Text>
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
    lbImageSelected: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default GalleryScreen;