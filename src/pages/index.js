import React, { useState } from 'react';
import { data } from '../../data/projects';
import Background from '../components/Background';
import Grid from '../components/Grid';
import ContentWrap from '../components/ContentWrap';
import Tile from '../components/Tile';
import ProjectLayer from '../components/ProjectLayer';
import Social from '../components/Social';

export default function Home() {
  const bgTintInitialState = {
    hue: 0,
    brightness: 1,
    saturate: 1,
  };
  const [bgTint, setBgTint] = useState(bgTintInitialState);
  const resetBg = () => setBgTint(bgTintInitialState);
  const [activeProject, setActiveProject] = useState();
  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        fontFamily: 'sans-serif',
      }}
    >
      <Background bgTint={bgTint} />
      <ContentWrap>
        <Social />
        <h1
          style={{
            fontSize: '12rem',
            fontWeight: '400',
            letterSpacing: '-0.1rem',
            padding: '4rem 0',
          }}
        >
          Alex Mejias
        </h1>
        {activeProject && (
          <ProjectLayer
            {...activeProject}
            onLayerClose={() =>
              setTimeout(() => setActiveProject(undefined), 500)
            }
          />
        )}
        <Grid>
          {data.map(project => (
            <Tile
              key={project.path}
              title={project.title}
              img={project.thumb}
              path={project.path}
              onMouseOut={() => resetBg()}
              onMouseOver={() => setBgTint(project.bgTint)}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </Grid>
      </ContentWrap>
    </div>
  );
}
