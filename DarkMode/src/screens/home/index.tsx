import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './styles';
import ScrollCard from '../../components/ScrollCard';
import { categories, trending } from './utils';

interface HomeProp {}

const Home = ({}: HomeProp) => {
  const [searchValue, setSearchValue] = useState('');
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Image
          source={require('../../assets/plant.jpg')}
          style={styles.image}
        />
        <Text style={[styles.title, { color: colors.text }]}>
          Hey!{'\n'}Suman
        </Text>
        <TextInput
          placeholder="Search"
          autoCapitalize="none"
          value={searchValue}
          onChangeText={(value) => setSearchValue(value)}
          style={styles.search}
        />
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <ScrollCard title="Categories" data={categories} />
        <ScrollCard title="Trending" data={trending} />
      </ScrollView>
    </View>
  );
};

export default Home;
