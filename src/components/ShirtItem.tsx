import React from 'react';
import {StyleSheet, Pressable, Text, Image, View} from 'react-native';
import GetColors from '../utils/CommonColors';

export interface Props {
  name: string;
  describe: string;
  arrowRight: any;
  image: string;
  price: string;
  onPress(): void;
}

const ShirtItem = (props: Props) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      {props.image === '1' ? (
        <Image
          source={require('../assets/ao_phong.jpg')}
          style={styles.image}
        />
      ) : (
        <Image source={require('../assets/ao_somi.jpg')} style={styles.image} />
      )}
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>{props.price} vnđ</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GetColors().WHITE,
    marginVertical: 2,
    marginRight: 3,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: 'rgb(225, 225, 225)',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    width: '50%',
    paddingTop: 12,
  },
  image: {
    width: 140,
    height: 140,
  },
  name: {
    fontSize: 16,
    lineHeight: 22,
    color: GetColors().TEXT_MAIN,
  },
  describe: {
    fontSize: 16,
    lineHeight: 22,
    color: GetColors().TEXT_MAIN,
  },
  price: {
    fontSize: 16,
    lineHeight: 22,
    color: GetColors().TEXT_MAIN,
    paddingBottom: 8,
  },
});

export default ShirtItem;
