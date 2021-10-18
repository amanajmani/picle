import {StyleSheet} from 'react-native';

/* THEME */
import theme from '../../../../theme/theme';

const styles = StyleSheet.create({
  bodyText: {
    ...theme.typography.body2,
  },
  primaryText: {
    color: theme.palette.text.primary,
  },
  resolution: {
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
  },
  resolutionContainer: {
    marginTop: theme.spacing(2),
  },
  userDescriptionContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 75,
  },
  userName: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(5),
  },
  tagsContainer: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(5),
    marginRight: theme.spacing(6),
    backgroundColor: theme.palette.secondary.main,
  },
  imageDescriptionRoot: {
    marginTop: theme.spacing(2),
  },
  userInfoContainer: {
    marginBottom: theme.spacing(20),
  },
});

export default styles;
