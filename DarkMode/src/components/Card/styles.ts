import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 3,

    elevation: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    color: '#707070',
  },
});

export default styles;
