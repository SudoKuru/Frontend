import * as React from 'react'
import { Platform, View } from 'react-native'
import './SudokuBoard.css'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const input = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9], 
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], 
    [1, 2, 3, 4, 5, 6, 7, 8, 9], 
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], 
    [1, 2, 3, 4, 5, 6, 7, 8, 9], 
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], 
    [1, 2, 3, 4, 5, 6, 7, 8, 9], 
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], 
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

const SudokuBoard = () => {

    const [inputArray, setInput] = React.useState(getDeepCopy(input));

    function getDeepCopy(arr: number[][]) {
        return JSON.parse(JSON.stringify(arr));
    }

    function sanitizeCell (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) {
        var userInput = parseInt(e.target.value) || -1, grid = getDeepCopy(inputArray);

        if (userInput === -1 || userInput >= 1 && userInput <= 9) {
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
                                return <tr key={rowIndex} className={((row + 1) % 3 === 0) ? 'hSquare' : ''}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, colIndex) => {
                                        return <td key = {rowIndex + colIndex} className={(col % 3 === 0) ? 'vSquare' : ''}>
                                            <input value = {inputArray[row][col] === -1 ? '' : inputArray[row][col]} onChange = {(e) => sanitizeCell(e, row, col)} className = 'cell'/>
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