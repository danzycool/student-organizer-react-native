import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = (props) => {

    return (
        <View key={props.itemData.index} style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}> {`${props.itemData.index + 1}. ${props.itemData.item}`}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5,
    }
})