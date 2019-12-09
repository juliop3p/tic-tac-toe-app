import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button} from 'react-native';

import EndGame from './src/EndGame'
import script from './src/script'
import Difficulty from './src/Difficulty';

export default function App() {
  const [board, setBoard] = useState(script.board)
  const [isGameOver, setIsGameOver] = useState(script.gameOver)
  const [score, setScore] = useState(script.score[0])
  let id = 0
  
  function modalVisible(event) {
    setIsGameOver(script.gameOver)
    if(event === 1) {
      script.restartGame()
      setIsGameOver(false)
      setBoard(script.board)
    }
  }

  function restartScore() {
    let restartScore = true
    script.restartGame(restartScore)
    setIsGameOver(false)
    setBoard(script.board)
    setScore(script.score[0])
  }

  function Score() {
    if(score.x > 0 || score.o > 0 || score.draw > 0) {
      return (
        <View style={styles.containerScore}>
          <Text style={styles.scoreText}>X: {score.x}</Text>
          <Text style={styles.scoreText}>O: {score.o}</Text>
          <Text style={styles.scoreText}>Draw: {score.draw}</Text>
        </View>
      )
    }
  }

  function handleDifficulty(param) {
    switch(param) {
      case 'easy':
        script.difficulty.easy = true
        script.difficulty.medium = false
        script.difficulty.impossible = false
      break
      case 'medium':
          script.difficulty.easy = false
          script.difficulty.medium = true
          script.difficulty.impossible = false
      break
      case 'impossible':
          script.difficulty.easy = false
          script.difficulty.medium = false
          script.difficulty.impossible = true
    }
  }

  function handleGame(position) {
    if(script.option.turn === 0) {
      const play = script.makePlay(position)
      setBoard([...play ? play : board])
      if(script.gameOver === false) {
        setTimeout(() => {
          play && script.machineTime()
          setBoard([...play ? play : board])
          modalVisible()
        }, 600)
      }
    }
    modalVisible()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Difficulty handleDifficulty={handleDifficulty}/>
      <View style={styles.containerGame}>
      {board.map((e, i) => (
      <TouchableOpacity 
        style={styles.piece} 
        key={id++}
        onPress={() => handleGame(i)}
      >
        <Text style={styles.gameOption}>{e}</Text>
      </TouchableOpacity>
    ))}
      <EndGame gameOver={isGameOver} winner={script.winner} modalVisible={modalVisible}/>
      </View>
      {Score()}
      <View style={styles.button}>
        <Button  
          title="Restart Score"
          color="#2cc9d4"
          onPress={() => restartScore()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b74ed',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  containerGame: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  piece: {
    width: (Dimensions.get('screen').width - 20) / 3,
    height: Dimensions.get('screen').width / 3,
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 20,
    fontSize: 35,
    color: '#fff'
  },
  gameOption: {
    color: '#3b74ed',
    fontSize: (Dimensions.get('screen').width / 3 - 20),
  },
  button: {
    width: '100%',
  },
  containerScore: {
    margin: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 20,
    
  },
  scoreText: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 20,
  }, 
});
