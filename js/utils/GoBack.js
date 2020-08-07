import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import NavigationUtil from '../utils/NavigationUtil';

// svg
import Navigate from '../assets/svg/navigate.svg'

function GoBack(props) {
  return (
    <View style={styles.leftWrapContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => NavigationUtil.goBack(props.navigation)}>
        <View style={styles.leftGoBackIcon}>
          <Navigate width={20} height={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  leftWrapContainer: {},
  leftGoBackIcon: {
    padding: 5,
    marginRight: 10,
  }
});

export default GoBack;
export { GoBack };
