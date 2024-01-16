/**
 * MainButtons component styles.
 */
import { Styles } from 'react-jss';
import { breakpoints } from '../../../../theme';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  mainButtons: {
    display: 'flex',
    flexDirection: 'row',
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      flexDirection: 'column',
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
} as Styles;
