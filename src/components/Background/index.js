import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundLayout } from './styles';

export const VideoBackground = ({ bgTint }) => (
  <BackgroundLayout
    hue={bgTint.hue}
    brightness={bgTint.brightness}
    saturate={bgTint.saturate}
  >
    <video loop autoPlay playsInline muted>
      <source src="/static/shimmer-pink-v02.mp4" />
    </video>
  </BackgroundLayout>
);

VideoBackground.propTypes = {
  bgTint: PropTypes.shape({
    hue: PropTypes.number,
    saturate: PropTypes.number,
    brightness: PropTypes.number,
  }).isRequired,
};

export default VideoBackground;
