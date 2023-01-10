import * as React from 'react'
import { Platform, View } from 'react-native'
import './SudokuBoard.css'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const input = [
    [0, 7, 2, 1, 9, 3, 5, 6, 0], 
    [9, 0, 0, 0, 0, 0, 3, 4, 2], 
    [1, 3, 0, 0, 2, 0, 0, 0, 7], 
    [0, 1, 7, 4, 3, 5, 0, 2, 6], 
    [3, 0, 0, 2, 7, 0, 0, 0, 0], 
    [2, 0, 5, 0, 0, 1, 4, 0, 0], 
    [0, 0, 3, 7, 4, 0, 0, 8, 0], 
    [7, 0, 0, 3, 0, 0, 2, 0, 9], 
    [5, 0, 0, 0, 0, 2, 0, 0, 0],
]

const SudokuBoard = () => {

    const [inputArray, setInput] = React.useState(parseJSON(input));

    function parseJSON(arr: number[][]) {
        return JSON.parse(JSON.stringify(arr));
    }

    function sanitizeCell (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) {
        var userInput = parseInt(e.target.value) || 0, grid = parseJSON(inputArray);

        if (userInput === 0 || userInput >= 1 && userInput <= 9) {
            grid[row][col] = userInput;
        }

        setInput(grid);
    }

    return (
        
        <div className='Sudokuru'>
            <div>

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
                                return <tr key = {rowIndex} className = {((row + 1) % 3 === 0) ? 'hSquare' : ''}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, colIndex) => {
                                        return <td key = {rowIndex + colIndex} className = {(col % 3 === 0) ? 'vSquare' : ''}>
                                            <input 
                                            value = {inputArray[row][col] === 0 ? '' : inputArray[row][col]} 
                                            onChange = {(e) => sanitizeCell(e, row, col)} 
                                            className = 'cell' 
                                            readOnly = {input[row][col] != 0}/>
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