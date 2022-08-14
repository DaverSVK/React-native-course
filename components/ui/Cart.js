import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constans/Colors";


function Cart({children}) {
    return(
        <View style={styles.inputContainer}>
            {children}
        </View>
    );

}

export default Cart;

const styles = StyleSheet.create({

inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})