import { Text, View } from "./react-native"
import { TaskItemStryle } from "./TaskIntemStyles"
export const TaskItem = () => {
    return (
        <View styles={TaskItemStryle.cardBox}>
            <Text> Tast Item Componet</Text>
        </View>
    )
}