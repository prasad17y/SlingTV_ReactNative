import React from 'react';
import { View, StyleSheet } from 'react-native';
import VideoView from '../native_modules/VideoView';//uses android's VideoView
import ExoPlayerView from '../native_modules/ExoPlayerView';//uses android's Exoplayer library
import NewExoPlayerView from '../native_modules/NewExoPlayerView';

const PlaybackScreen = () => {
    return (
        <View style={styles.ParentContainer} >
            {/* <VideoView url="https://developers.google.com/training/images/tacoma_narrows.mp4" style={styles.videoViewStyle} >

            </VideoView> */}
            {/* https://developers.google.com/training/images/tacoma_narrows.mp4
            https://drive.google.com/file/d/1iMeioSU2Vvx6vePrF50ktq5yDb-U_Yg6/view */}
            {/* <ExoPlayerView url="https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4" style={styles.videoViewStyle} >

            </ExoPlayerView> */}
            <NewExoPlayerView url="https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4" style={styles.videoViewStyle} >

            </NewExoPlayerView>
        </View>
    );
};
const styles = StyleSheet.create({
    ParentContainer: {
        flex: 1,
        backgroundColor: "red",
    },
    videoViewStyle: {
        flex: 1,
    },
});
export default PlaybackScreen;