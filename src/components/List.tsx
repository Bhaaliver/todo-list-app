import ListItem from "./ListItem";
import { data } from "../FakeData"

export default function List(){
    return <>
        {data.map((chore)=> <ListItem name={chore}/>)}
    </>
}