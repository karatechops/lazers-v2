import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ProjectLayerLayout,
  ContentLayout,
  ProjectImage,
  Copy,
  Button,
  CloseButton,
} from './styles';

export const ProjectLayer = ({ title, thumb, desc, link, onLayerClose }) => {
  const [isLeaving, setIsLeaving] = useState(false);
  return (
    <ProjectLayerLayout className={isLeaving && 'is-leaving'}>
      <ContentLayout>
        <ProjectImage>
          <img src={thumb} alt={title} />
        </ProjectImage>
        <Copy>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: desc }} />
          <Button href={link} target="__blank" rel="noopener noreferrer">
            View the project
          </Button>
        </Copy>
      </ContentLayout>
      <CloseButton
        onClick={() => {
          onLayerClose();
          setIsLeaving(true);
        }}
      >
        <img src="/static/close.png" alt="close layer" />
      </CloseButton>
    </ProjectLayerLayout>
  );
};

ProjectLayer.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onLayerClose: PropTypes.func.isRequired,
  bgTint: PropTypes.shape({
    hue: PropTypes.number,
    saturate: PropTypes.number,
    brightness: PropTypes.number,
  }),
};

export default ProjectLayer;
