import React from 'react';
import type {Node} from 'react';
import {View} from 'react-native';
import {Text, Button, Icon, Image, Tile} from 'react-native-elements';

import * as Styles from '../Includes/Styles';

const HomeScreen = ({route, navigation}) => {
  return (
    <View
      style={[
        Styles.Common.Container,
        Styles.Common.CenterH,
        Styles.Common.CenterV,
      ]}>
      <Tile
        imageSrc={require('../Assets/logo.png')}
        containerStyle={{width: '80%', height: 200}}
      />
      <Button
        title="手动输入"
        icon={{
          name: 'pencil',
          size: 20,
          color: 'white',
        }}
        onPress={() => navigation.navigate('Contents')}
      />
      <Button
        title="选图识别"
        icon={{
          name: 'images',
          size: 20,
          color: 'white',
        }}
        onPress={() => navigation.navigate('Contents')}
      />
      <Button
        title="拍照识别"
        icon={{
          name: 'camera',
          size: 20,
          color: 'white',
        }}
        onPress={() => navigation.navigate('Contents')}
      />
    </View>
  );
};

export default HomeScreen;
