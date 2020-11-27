import PropTypes from "prop-types";
import { requireNativeComponent, ViewPropTypes } from "react-native";
var viewProps = {
  name: "ExoPlayerView",
  propTypes: {
    url: PropTypes.string,
    ...ViewPropTypes,
  }
}
module.exports = requireNativeComponent("ExoPlayerView", viewProps);