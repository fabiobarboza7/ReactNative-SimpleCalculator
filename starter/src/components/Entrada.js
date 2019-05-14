import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Numero from './Numero';

export default props => (
	<View style={styles.numeros}>
		<Numero num={props.num1} atualiza={props.atualiza} nome='num1' />
		<Numero num={props.num2} atualiza={props.atualiza} nome='num2' />
	</View>
);

const styles = StyleSheet.create({
	numeros: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
})