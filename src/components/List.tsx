import { ListItem } from "./ListItem";
import { initialData } from '../FakeData'
import { TextInput } from "./TextInput";
import { useLocalStorage } from 'usehooks-ts'

export default function List(){
    const [items, setitems] = useLocalStorage("app-todo-list", initialData)

    const toggleActiveState = (name:string) => {
        const oldItem = items.find((i) => i.name === name)
        if (oldItem) {
            const newItem = {...oldItem, completed: !oldItem.completed} 
            setitems([...items.filter((i) => i.name !== name), newItem])
        }
    }
    const addTodoList = (name: string)=>{setitems([...items, {name, completed: false, dateCreated: Date.now()}])}
    // const 

    return <div className="List"><h1>Todo List</h1><TextInput addTodoItem={addTodoList}/>{items.sort((a, b)=> a.dateCreated - b.dateCreated).map((chore)=> <ListItem key={chore.name} {...chore} onClick={toggleActiveState}/>)}</div>
}