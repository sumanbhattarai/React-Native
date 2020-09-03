import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  scrollView: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  scrollView: {
    paddingBottom: 36,
  },
});

export default styles;
