import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constans/Colors";


function Title({children}) {
    return(
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    );

}

export default Title;

const styles = StyleSheet.create({

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.ascent500,
        padding: 12,
    },
})