import React from 'react'
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'

import script from './script'

export default function Difficulty(props) {
    return (
        <View style={styles.levels}>
        <TouchableOpacity 
          style={script.difficulty.easy ? styles.levelClicked : styles.levelsBtn}
          onPress={() => props.handleDifficulty('easy')}
        >
          <Text style={styles.levelsText}>Easy</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={script.difficulty.medium ? styles.levelClicked : styles.levelsBtn}
          onPress={() => props.handleDifficulty('medium')}
        >
          <Text style={styles.levelsText}>Medium</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={script.difficulty.impossible ? styles.levelClicked : styles.levelsBtn}
          onPress={() => props.handleDifficulty('impossible')}
        >
          <Text style={styles.levelsText}>Impossible</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    levels: {
        flexDirection: 'row',
      },
      levelsBtn: {
        marginHorizontal: 30,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
      },
      levelsText: {
        color: '#fff',
      }, 
      levelClicked: {
        marginHorizontal: 30,
        borderWidth: 2,
        borderColor: '#dea22a',
        padding: 10,
      }
})