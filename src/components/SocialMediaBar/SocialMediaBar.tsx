import React from 'react';
import { MediaButtonProps } from './utils';
import { IconButton } from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn';
import YouTube from '@material-ui/icons/YouTube';
import QueueMusic from '@material-ui/icons/QueueMusic';
import {
  useMediaBarStyles,
  useMediaButtonStyles,
} from './SocialMediaBar.styles';

function MediaButton(props: MediaButtonProps) {
  const classes: ReturnType<typeof useMediaButtonStyles> = useMediaButtonStyles();

  return (
    <IconButton
      className={classes.button}
      aria-label="close"
      onClick={() => window.open(props.url, '_blank')}>
      {props.children}
    </IconButton>
  );
}

export function SocialMediaBar(): JSX.Element {
  const classes: ReturnType<typeof useMediaBarStyles> = useMediaBarStyles();
  return (
    <div className={classes.buttonContainer}>
      <MediaButton url="www.google.com">
        <LinkedIn />
      </MediaButton>
      <MediaButton url="www.google.com">
        <YouTube />
      </MediaButton>
      <MediaButton url="www.google.com">
        <QueueMusic />
      </MediaButton>
    </div>
  );
}
