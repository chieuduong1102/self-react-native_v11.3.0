import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const GalleryItem = ({ 
    item, 
    quantities, 
    setQuantities, 
    setNumberSelected 
}: { 
    item: { id: string; uri: string }; 
    quantities: { [key: string]: number }; 
    setQuantities: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>; 
    setNumberSelected: React.Dispatch<React.SetStateAction<number>>; 
}) => {
    const handleIncrease = () => {
        setQuantities((prev) => {
            const updated = {
                ...prev,
                [item.id]: (prev[item.id] || 0) + 1,
            };
            updateNumberSelected(updated);
            return updated;
        });
    };

    const handleDecrease = () => {
        setQuantities((prev) => {
            const updated = {
                ...prev,
                [item.id]: Math.max((prev[item.id] || 0) - 1, 0), // Không cho phép số lượng nhỏ hơn 0
            };
            updateNumberSelected(updated);
            return updated;
        });
    };

    const updateNumberSelected = (updatedQuantities: { [key: string]: number }) => {
        const total = Object.values(updatedQuantities).reduce((sum, quantity) => sum + quantity, 0);
        setNumberSelected(total);
    };

    return (
        <View style={[styles.imageContainer, styles.imageWrapper]}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={handleDecrease} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantities[item.id] || 0}</Text>
                <TouchableOpacity onPress={handleIncrease} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        margin: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    imageWrapper: {
        position: 'relative',
    },
    counterContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        padding: 5,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    quantity: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});