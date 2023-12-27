import { StyleSheet, View, Text } from 'react-native';

const GoalItem = ({ itemData }) => {

    return (
        <View key={itemData.index} style={styles.goalItem}>
            <Text style={styles.goalText}> {`${itemData.index + 1}. ${itemData.item}`}</Text>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        color: 'white'
    },
})