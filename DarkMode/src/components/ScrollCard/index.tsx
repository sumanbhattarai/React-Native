import React from 'react';
import { View, Text, ScrollView, ImageSourcePropType } from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './styles';
import Card from '../Card';

interface Details {
  name: string;
  location: ImageSourcePropType;
}

interface ScrollCardProps {
  data: Array<Details>;
  title: string;
}

const ScrollCard = ({ data, title }: ScrollCardProps) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {data.map((el, index) => {
          return <Card key={index} data={el} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ScrollCard;
