import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import Colors from "./constans/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [roundsNumber,setRoundsNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if(!fontLoaded){return <AppLoading/>}

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds)
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setRoundsNumber(0);
  }

  let screen = <StartGameScreen onPickNumber={startGameHandler} />;
  if(userNumber) {screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>}
  if(gameIsOver && userNumber) {screen = <GameOverScreen roundsNumber={roundsNumber} userNumber={userNumber} onStartNewGame={startGameHandler}/>}


  return (
    <LinearGradient colors={[Colors.primary700,Colors.ascent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
