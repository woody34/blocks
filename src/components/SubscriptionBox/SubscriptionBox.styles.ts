import { createUseStyles } from 'react-jss';

export const useSubcriptionBoxStyles = createUseStyles({
  subContainer: {
    padding: '10px',
  },
  subTitle: {
    color: 'grey',
    fontSize: '25px',
  },
  subText: {
    color: 'grey',
    fontSize: '15px',
    marginTop: '12px',
  },
  emailInput: {
    width: '100%',
    margin: '15px 0px !important',
  },
  subscribeButton: {
    width: '100%',
    backgroundColor: '#00d2d3 !important',
    color: 'white !important',
    boxShadow: 'unset !important',
  },
});
