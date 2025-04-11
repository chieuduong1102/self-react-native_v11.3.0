import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useRouter } from 'expo-router'; 

export const MenuFunction = () => {
    const router = useRouter(); 
    const menuItems = [
        { icon: 'home', text: 'Home', path: '/index' },
        { icon: 'user', text: 'MyProfile', path: '/profile' },
        { icon: 'image', text: 'Gallery', path: '../screens/gallery' },
        { icon: 'star', text: 'Top', path: '/top' },
        { icon: 'bell', text: 'Notifications', path: '/notifications' },
    ];

    const handlePress = (path: string) => {
        router.push(path as any); 
    };

    return (
        <View style={styles.container}>
            {menuItems.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => handlePress(item.path)}
                >
                    <Icon name={item.icon} size={24} color="black" style={styles.icon} />
                    <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: '90%',
    },
    icon: {
        marginRight: 10,
        width: 30,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default MenuFunction;