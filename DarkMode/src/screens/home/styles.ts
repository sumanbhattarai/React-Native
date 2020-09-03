import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

import Constant from '../../utils/Constant';

interface Style {
  container: ViewStyle;
  firstView: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  search: ViewStyle;
  scrollView: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  firstView: {
    width: '100%',
    height: Constant.height / 3,
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    position: 'absolute',
    color: '#f0f0f0f0',
    fontWeight: 'bold',
    fontSize: 32,
    padding: 16,
  },
  search: {
    width: '60%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: -25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  scrollView: {
    marginTop: 24,
  },
});

export default styles;
