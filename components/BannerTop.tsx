import { StyleSheet, View, Image, Dimensions, ScrollView, ViewStyle, TouchableOpacity, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

interface BannerTopProps {
    style?: ViewStyle; // Add style prop
}
export const BannerTop: React.FC<BannerTopProps> = ({ style }) => {
    const images = [
        'https://i.pinimg.com/736x/8b/46/01/8b46016b6bc16f50f3fadc13a7afdcef.jpg', // Default image 1
        'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/02/anh-bia-cute-dep.jpg?ssl=1', // Default image 2
        'https://st.quantrimang.com/photos/image/2018/09/17/anh-bia-facebook-de-thuong-10.jpg', // Default image 3
    ];

    const scrollViewRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
        scrollViewRef.current?.scrollTo({ x: prevIndex * width, animated: true });
    };

    return (
        <View style={[styles.container, style]}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(newIndex);
                }}
            >
                {images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.image} />
                ))}
            </ScrollView>
            {/* Prev Button */}
            <TouchableOpacity style={[styles.arrow, styles.leftArrow]} onPress={handlePrev}>
                <Icon name="chevron-left" size={20} color="white" />
            </TouchableOpacity>
            {/* Next Button */}
            <TouchableOpacity style={[styles.arrow, styles.rightArrow]} onPress={handleNext}>
                <Icon name="chevron-right" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200, // Default height for the banner
    },
    scrollView: {
        flex: 1,
    },
    image: {
        width: width,
        height: '100%',
        resizeMode: 'cover', // Use 'cover' or 'contain' as needed
    },
    arrow: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -20 }],
        padding: 12,
        borderRadius: 25,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    leftArrow: {
        left: 10,
    },
    rightArrow: {
        right: 10,
    },
});