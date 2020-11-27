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
        
        //Uri uri = Uri.parse("https://vod-progressive.akamaized.net/exp=1605287373~acl=%2A%2F1274780453.mp4%2A~hmac=aa98243d8cb0dae86f41133bc1a323c54ba56baf76db538fc9a50b32b91de7cb/vimeo-prod-skyfire-std-us/01/161/13/325806440/1274780453.mp4?filename=Pexels+Videos+2048452.mp4");
        Uri uri = Uri.parse(urlPath);
        videoView.setVideoURI(uri);
        videoView.start();
    }
}
