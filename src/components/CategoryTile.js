import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryTile = ({ categoryDetails, selectedCategory, callback }) => {
    const [state, setState] = React.useState({ isFocused: false });
    if(selectedCategory==categoryDetails.id){
        //do nothing
    }else{
        if(state.isFocused){
            setState({ isFocused: false });
        }
    }

    return (
        <TouchableNativeFeedback
            style={styles.tileStyle}
            onPress={() => {
                setState({ isFocused: !state.isFocused });
                callback(categoryDetails.id);
            }}
        >
            <View collapsable={false}>
                <View style={state.isFocused ? styles.imageWrapperOnFocus : styles.imageWrapper}>
                    <ImageBackground
                        style={styles.showThumbnail}
                        source={{ uri: categoryDetails.image_url }}
                    >
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle}>{categoryDetails.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ width: 240, height: 15 }}>
                    {state.isFocused ? 
                    (<View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={styles.orangeDownArrowStyle}
                            source={require("../assets/orange-down-arrow.png")}
                        />
                    </View>) : null}
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    imageWrapper: {
        opacity: 0.5
    },
    imageWrapperOnFocus: {
        opacity: 1,
        borderBottomWidth: 5,
        borderColor: "#fc7703"
    },
    showThumbnail: {
        height: 140,
        width: 240,
        borderRadius: 5
    },
    orangeDownArrowStyle: {
        width: 10,
        height: 10,
    },
    textStyle: {
        fontSize: 15,
        color: "white",
    },
    tileStyle: {
        marginHorizontal: 20,
    }
});
export default CategoryTile;