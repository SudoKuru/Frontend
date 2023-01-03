import * as React from 'react'
import { Platform, View } from 'react-native'
import './SudokuBoard.css'

const SudokuBoard = () => {

    return (
        

        <div className='Sudokuru'>
            <div className='Sudoku Mentor'>

                <View style={{flex : 1}}>
                {Platform.OS === 'ios' && (
                    <View style={{
                        flex: 1, 
                        backgroundColor: 'lightblue'
                    }} />
                )}

                {Platform.OS === 'android' && (
                    <View style={{
                        flex: 1, 
                        backgroundColor: 'lightgreen'
                    }} />
                )}
                </View>

                <table>
                    <tbody>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rowIndex) => {
                                return <tr key={rowIndex}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, colIndex) => {
                                        return <td key={rowIndex + colIndex}>
                                            <input className='cell'/>
                                        </td>
                                    })}
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
        
    );

}


export default SudokuBoard;