import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import styles from './styles';

interface Details {
  name: string;
  location: ImageSourcePropType;
}

interface CardProps {
  data: Details;
}

const Card = ({ data }: CardProps) => {
  return (
    <View style={styles.container}>
      <Image source={data.location} style={styles.image} />
      <Text style={styles.title}>{data.name}</Text>
    </View>
  );
};

export default Card;
