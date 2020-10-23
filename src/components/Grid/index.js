import React from 'react';
import PropTypes from 'prop-types';
import { GridLayout } from './styles';

export const Grid = ({ children }) => <GridLayout>{children}</GridLayout>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
