import React from 'react';
import PropTypes from 'prop-types';
import { TileLayout, Background, BackgroundOverlay } from './styles';

export const Tile = ({ img, title, ...props }) => (
  <TileLayout {...props} href="#">
    <Background img={img} />
    <BackgroundOverlay />
    <h2 dangerouslySetInnerHTML={{ __html: title }} />
  </TileLayout>
);

Tile.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Tile;
