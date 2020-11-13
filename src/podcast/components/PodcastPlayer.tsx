import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

const PodcastPlayer: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState(true);
  const closePlayer = () => setShowPlayer(false);
  const openPlayer = () => setShowPlayer(true);
  return (
    <>
      <React.Fragment key={'bottom'}>
        <Button onClick={openPlayer}>Show Player</Button>
        <Drawer anchor="bottom" open={showPlayer} onClose={closePlayer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </React.Fragment>
    </>
  );
};
  
export default PodcastPlayer;