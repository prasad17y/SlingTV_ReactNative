import PropTypes from "prop-types";
import { requireNativeComponent, ViewPropTypes } from "react-native";
var viewProps = {
  name: "NewExoPlayerView",
  propTypes: {
    url: PropTypes.string,
    status: PropTypes.string,
    ...ViewPropTypes,
  }
}
module.exports = requireNativeComponent("NewExoPlayerView", viewProps);