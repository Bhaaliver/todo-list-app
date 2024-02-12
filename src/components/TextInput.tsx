import { useState } from "react"
import { useLocalStorage } from 'usehooks-ts'

export interface addTodoItemProps {
    addTodoItem: (name: string) => void
}

export function TextInput(props: addTodoItemProps){
    const [inputText, setInputText] = useState("")
    const { addTodoItem } = props
    return (<>
        <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/> 
        <button onClick={()=>{setInputText("");addTodoItem(inputText)}}>submit todo</button>
    </>)
}