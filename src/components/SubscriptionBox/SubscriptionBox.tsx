import React from 'react';
import { useSubcriptionBoxStyles } from './SubscriptionBox.styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddAlert from '@material-ui/icons/AddAlert';

export const SubscriptionBox = (): JSX.Element => {
  const classes: ReturnType<typeof useSubcriptionBoxStyles> = useSubcriptionBoxStyles();

  return (
    <div className={classes.subContainer}>
      <div className={classes.subTitle}>Notify Me</div>
      <div className={classes.subText}>
        Don&rsquo;t miss out on new content. Get an alert whenever we post a new
        podcast!
      </div>
      <TextField
        className={classes.emailInput}
        label="Email"
        variant="outlined"
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.subscribeButton}
        endIcon={<AddAlert />}>
        Subscribe
      </Button>
    </div>
  );
};
