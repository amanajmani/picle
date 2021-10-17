import {StyleSheet} from 'react-native';

/* THEME */
import theme from '../../../../theme/theme';

/* UTILS */
import scale from '../../../../utils/scale.utils';

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.palette.primary.dark,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    ...theme.typography.h1,
    flex: 1,
    color: theme.palette.text.secondary,
  },
  padding: {
    padding: theme.spacing(5),
  },
  logo: {
    width: scale(28),
    height: scale(28),
  },
});

export default styles;
