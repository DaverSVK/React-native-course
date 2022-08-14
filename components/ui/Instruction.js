import { Text, StyleSheet } from 'react-native';
import Colors from '../../constans/Colors';

function Instruction({children, style}){

    return(
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}
export default Instruction;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.ascent500,
        fontSize: 25,
      },
})