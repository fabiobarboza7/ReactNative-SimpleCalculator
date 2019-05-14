import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default props => (
	<TextInput 
		style={styles.numero} 
		value={props.num} 
		onChangeText={valorDoCampo => props.atualiza(props.nome, valorDoCampo)}
	/>
);

const styles = StyleSheet.create({
	numero: {
		width: 140,
		height: 80,
		fontSize: 20,
		borderRadius: 10,
		backgroundColor: '#EEE'
	}
});
