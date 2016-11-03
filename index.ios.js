/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Modal,
	Alert,
} from 'react-native';

export default class ModalAlertCombo extends Component {
	constructor(props) {
		super(props);
		this.state = {isModalVisible: false}
	}

	onToggleModal() {
		this.setState({isModalVisible: !this.state.isModalVisible});
	}

	onAlertAndClose() {
		// this will work
		// this.setState({isModalVisible: false}, () => setTimeout(() => Alert.alert('Alert this!'), 2000));

		// this will break the app
		this.setState({isModalVisible: false}, () => setTimeout(() => Alert.alert('Alert this!'), 100));
	}

	renderToggleButton() {
		return (
				<TouchableOpacity
					onPress={this.onToggleModal.bind(this)}
				>
					<Text>Toggle Modal</Text>
				</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderToggleButton.call(this)}
				<Modal
					ref={(modal) => this.modal = modal}
					visible={this.state.isModalVisible}
					animationType="slide"
				>
					<View style={[styles.container, styles.modal]}>
						<TouchableOpacity
							onPress={this.onAlertAndClose.bind(this)}
						>
							<Text>Do alert and close modal!</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	modal: {
		backgroundColor: '#E5E5E5'
	},
});

AppRegistry.registerComponent('ModalAlertCombo', () => ModalAlertCombo);
