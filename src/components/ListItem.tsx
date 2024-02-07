
export interface ListItemProps {
    name: string
    completed: boolean
    onClick: (name: string) => void
    dateCreated: number
}

export function ListItem(props: ListItemProps){
    const {name, completed, onClick} = props;

    return <p className={completed ? "completed": undefined} onClick={() => onClick(name)}>{name}</p>
}