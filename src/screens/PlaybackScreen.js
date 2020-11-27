import React from 'react';
import { View, StyleSheet} from 'react-native';
import VideoView from '../native_modules/VideoView';//uses android's VideoView
import ExoPlayerView from '../native_modules/ExoPlayerView';//uses android's Exoplayer library

const PlaybackScreen = () => {
    return (
        <View style={styles.ParentContainer} >
            {/* <VideoView url="https://developers.google.com/training/images/tacoma_narrows.mp4" style={styles.videoViewStyle} >

            </VideoView> */}
            <ExoPlayerView url="https://developers.google.com/training/images/tacoma_narrows.mp4" style={styles.videoViewStyle} >

            </ExoPlayerView>
        </View>
    );
};
const styles = StyleSheet.create({
    ParentContainer : {
        flex:1,
        backgroundColor:"red",
    },
    videoViewStyle:{
        flex:1,
    },
});
export default PlaybackScreen;