import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ShowTile = ({ showDetails }) => {
    const [state, setState] = React.useState({ isFocused: false });
    //const onFocusChange = () => { setState({ isFocused: !state.isFocused }) };
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback
            //activeOpacity={0.6}
            //hasTVPreferredFocus={true}
            //accessible={true}
            //nativeID={showDetails.id}
            //nextFocusRight={parseInt(showDetails.id) + 1}
            style={styles.tileStyle}
            myProp={state}
            
            onFocus={() => {
                setState({ isFocused: !state.isFocused });
                console.log("focussed");
            }}
            onBlur={() => {
                setState({ isFocused: !state.isFocused });
            }}
            onPressIn={() => {
                console.log("onpressin");
                setState({ isFocused: !state.isFocused });
                navigation.navigate("Playback");
            }}
            onPressOut={() => {
                setState({ isFocused: !state.isFocused });
            }}
        >
            <View collapsable={false}>
                <View style={state.isFocused ? styles.imageWrapperOnFocus : styles.imageWrapper}>
                    <Image
                        //onFocus={onFocusChange}
                        style={styles.showThumbnail}
                        source={{ uri: showDetails.image_url }}
                    //onError={(error)=>{console.log(error);}}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.showTitleStyle}>{showDetails.channel_name}  .  </Text>
                    <Text style={styles.showRatingStyle}>{showDetails.rating}</Text>
                    <Text style={styles.showTitleStyle}>  .  {showDetails.length}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    imageWrapper: {
        borderRadius: 5,
        borderBottomWidth: 4,
        borderColor: "#0367fc"
    },
    imageWrapperOnFocus: {
        borderRadius: 5,
        borderWidth: 5,
        borderColor: "#fc7703"
    },
    showThumbnail: {
        height: 140,
        width: 240,
        borderRadius: 5
    },
    tileStyle: {
        marginHorizontal: 20,
    },
    showTitleStyle: {
        fontSize: 15,
        color: "white",
        marginTop: 7,
    },
    showRatingStyle: {
        fontSize: 13,
        color: "white",
        marginTop: 7,
        borderWidth: 1,
        borderColor: "white"
    }
});
export default ShowTile;