import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ExoPlayerView from '../native_modules/ExoPlayerView';
import NewExoPlayerView from '../native_modules/NewExoPlayerView';
import VideoView from '../native_modules/VideoView';
const HEIGHT = 200;
const WIDTH = 400;

const ShowWithPreviewTile = ({ showDetails }) => {
    const [state, setState] = useState({ isFocused: false });
    const [preview, setPreview] = useState(false);
    //const [playerStatus,setplayerStatus] = useState("quit");
    const navigation = useNavigation();


    return (
        <TouchableNativeFeedback
            style={styles.tileStyle}
            onPress={() => {
                console.log("onpress");
                navigation.navigate("Playback");
            }}
            onLongPress={() => {
                console.log("Onlongpress");
                //setplayerStatus("play");
                setState({ isFocused: !state.isFocused });
                setPreview(!preview);
            }}
            onPressOut={() => {
                console.log("onpressout");
                //setplayerStatus("quit");
                //setplayerStatus("");
                
                setPreview(false);
                setState({ isFocused: false });
            }}
        >

            <View style={state.isFocused ? styles.imageWrapperOnFocus : styles.imageWrapper}>
                {
                    preview
                    ? 
                    //(<VideoView url="https://developers.google.com/training/images/tacoma_narrows.mp4" style={styles.videoViewStyle}></VideoView>) 
                    //(<NewExoPlayerView url="https://developers.google.com/training/images/tacoma_narrows.mp4" style={styles.ExoPlayerViewStyle}></NewExoPlayerView>)
                    (<ExoPlayerView url="https://developers.google.com/training/images/tacoma_narrows.mp4" style={styles.ExoPlayerViewStyle}></ExoPlayerView>)
                    : 
                    (<Image style={state.isFocused ? styles.showThumbnailOnFocus : styles.showThumbnail} source={{ uri: showDetails.image_url }} />)
                }
                {
                    preview
                    ?
                    (<View style={styles.overlappingViewStyle}>
                        <Text style={styles.showTitleStyle}>{showDetails.channel_name}</Text>
                        <Text style={styles.showRatingStyle}>{showDetails.rating}</Text>
                        <Text style={styles.showTitleStyle}>{showDetails.length}</Text>
                    </View>)
                    :
                    null
                }
                
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
        borderColor: "#fc7703",
    },
    showThumbnail: {
        height: HEIGHT,
        width: WIDTH,
        borderRadius: 5
    },
    showThumbnailOnFocus:{
        height: HEIGHT-10,
        width: WIDTH-9,
    },
    tileStyle: {
        marginHorizontal: 20,
    },
    showTitleStyle: {
        fontSize: 15,
        color: "white",
        marginTop: 7,
    },
    ExoPlayerViewStyle: {
        height: HEIGHT-10,
        width: WIDTH-50,
    },
    overlappingViewStyle: {
        position:"absolute",
        height: HEIGHT-10,
        width: WIDTH-9,
    },
    showTitleStyle: {
        fontSize: 15,
        color: "white",
        marginTop: 7,
    },
    showRatingStyle: {
        alignSelf:"flex-start",
        fontSize: 13,
        color: "white",
        marginTop: 7,
        borderWidth: 1,
        borderColor: "white"
    },
    videoViewStyle:{
        height: HEIGHT-10,
        width: WIDTH-50,
    },
});
export default ShowWithPreviewTile;