import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constans/Colors";

function NumberContainer({children}){
    return(
    <View style={styles.container}>
        <Text style={styles.numberTrext}>{children}</Text>
    </View>
    )
}
export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.ascent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberTrext: {
        color: Colors.ascent500,
        fontSize: 36,
        // fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
    },
})