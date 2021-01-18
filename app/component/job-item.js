/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

const Item = ({ item, onPress, style, nav }) => (
    <TouchableOpacity
        onPress={() => {
            onPress;
            nav.navigate('Detail', {
                id: item.id,
            });
        }}
        style={[styles.item, style]}>
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={{ uri: item.company_logo }}
                style={styles.image}
            />
            <View style={{ flex: 3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.company}</Text>
                <Text style={styles.subtitle}>{item.location}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 80,
        height: 80,
        marginEnd: 16,
        borderRadius: 8,
    },
    item: {
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
    },
    subtitle: {
        fontSize: 14,
        color: '#333333',
    },
});

export default Item;
