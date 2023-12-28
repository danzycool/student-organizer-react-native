import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image, Alert } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        if (enteredGoalText == '') {
            Alert.alert(
                'NO INPUT!!!',
                'Please enter a Goal to proceed',
                [
                    {
                        text: 'OK',
                        style: 'cancel',
                    },
                ],
                {
                    cancelable: true,
                    onDismiss: () => {
                        return null
                    }
                },
            );
        } else {
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter Course Goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='ADD GOAL' color='blue' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            color='red'
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        marginBottom: 24,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        marginHorizontal: 'auto',
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    dismiss: {
        backgroundColor: '#e4d0ff',
        color: 'white'
    }

})