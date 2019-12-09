import React from 'react';
import { Modal, StyleSheet, Text, View, Button, Dimensions} from 'react-native';


export default function EndGame(props) {
 
  return (
    <Modal transparent={true} visible={props.gameOver} animationType="fade">
        <View style={styles.containerEndgame}>
            <View style={styles.itens}>
                {props.winner === 'Draw' ? 
                <Text style={styles.textWin}>{props.winner}!!!</Text> :
                <Text style={styles.textWin}><Text style={styles.winner}>{props.winner}</Text> WINNER!!!</Text>
                }
                
                <Button 
                    title="Play Again"
                    onPress={() => props.modalVisible(1)}
                />
            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    containerEndgame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    textWin: {
        fontSize: 50,
        color: '#3b74ed',
        textAlign: 'center',
    },
    itens: {
        width: '100%',
        backgroundColor: '#fff',
        opacity: 0.8,
        padding: 10,
        elevation: 5,
    },
    winner: {
        fontSize: 80,
        color: '#33322f',
    }
});
