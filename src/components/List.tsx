import { ListItem } from "./ListItem";
import { initialData } from '../FakeData'
import { useState } from "react";

export default function List(){
    const [items, setitems] = useState(initialData)

    const clickHandler = (name:string) => {
        const oldItem = items.find((i) => i.name === name)
        if (oldItem) {
            const newItem = {...oldItem, completed: !oldItem.completed} 
            setitems([...items.filter((i) => i.name !== name), newItem])
        }
    }

    return items.sort((a, b)=> a.dateCreated - b.dateCreated).map((chore)=> <ListItem key={chore.name} {...chore} onClick={clickHandler}/>)
}