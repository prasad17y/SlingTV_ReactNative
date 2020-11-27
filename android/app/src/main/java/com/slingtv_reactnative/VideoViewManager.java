package com.slingtv_reactnative;

import android.net.Uri;
import android.widget.VideoView;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class VideoViewManager extends SimpleViewManager<VideoView> {

    public static final String REACT_CLASS = "VideoView";
    public static ReactContext reactContext;
    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected VideoView createViewInstance(@NonNull ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        VideoView videoView = new VideoView(reactContext);
        return videoView;
    }

    @ReactProp(name="url")
    public void setVideoPath(VideoView videoView, String urlPath) {
        
        Uri uri = Uri.parse(urlPath);
        videoView.setVideoURI(uri);
        videoView.start();
    }
}
