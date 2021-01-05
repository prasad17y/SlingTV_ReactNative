package com.slingtv_reactnative;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.text.Layout;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.google.android.exoplayer2.ExoPlaybackException;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.ui.PlayerView;
import com.google.android.exoplayer2.upstream.RawResourceDataSource;

public class NewExoPlayerViewManager extends ViewGroupManager<LinearLayout> {

    public static final String REACT_CLASS = "NewExoPlayerView";
    public static ReactContext reactContext;
    private SimpleExoPlayer player;
    PlayerView playerView;
    private boolean playWhenReady = true;
    private int currentWindow = 0;
    private long playbackPosition = 0;


    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected LinearLayout createViewInstance(@NonNull ThemedReactContext reactContext) {
        this.reactContext = reactContext;

        LayoutInflater inflater = (LayoutInflater)reactContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        LinearLayout linearLayout = (LinearLayout) inflater.inflate(R.layout.exoplayer_layout, null);
        Intent intent = new Intent(reactContext, PlayerActivity.class);
        //reactContext.startActivity(intent);
        linearLayout.getContext().startActivity(intent);
        return linearLayout;
    }

    @ReactProp(name="url")
    public void setVideoPath(LinearLayout linearLayout, String urlPath) {
        /*player = new SimpleExoPlayer.Builder(reactContext).build();
        playerView.setPlayer(player);
        Uri uri = RawResourceDataSource.buildRawResourceUri(R.raw.suits);
        MediaItem mediaItem = MediaItem.fromUri(uri);
        player.setMediaItem(mediaItem);
        player.setPlayWhenReady(playWhenReady);
        player.seekTo(currentWindow, playbackPosition);
        player.prepare();*/


        Log.i("info","player started");
    }
}
/*
public class ExoPlayerViewManager extends SimpleViewManager<PlayerView> {

    public static final String REACT_CLASS = "ExoPlayerView";
    public static ReactContext reactContext;
    private SimpleExoPlayer player;
    PlayerView playerView;
    private boolean playWhenReady = true;
    private int currentWindow = 0;
    private long playbackPosition = 0;

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected PlayerView createViewInstance(@NonNull ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        player = new SimpleExoPlayer.Builder(reactContext).build();
        playerView = new PlayerView(reactContext);

        return playerView;
    }



    @ReactProp(name="url")
    public void setVideoPath(PlayerView playerViewParam, String urlPath) {
        player = new SimpleExoPlayer.Builder(reactContext).build();
        playerViewParam.setPlayer(player);
        MediaItem mediaItem = MediaItem.fromUri(urlPath);
        player.setMediaItem(mediaItem);
        player.setPlayWhenReady(playWhenReady);
        player.seekTo(currentWindow, playbackPosition);
        player.prepare();
    }

}
*/
