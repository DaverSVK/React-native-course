import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constans/Colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your mobile needet{" "}
        <Text style={styles.highligtText}>{roundsNumber}</Text> Guesses to
        number <Text style={styles.highligtText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a new game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
  },
  highligtText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
