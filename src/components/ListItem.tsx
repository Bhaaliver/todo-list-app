interface ListItemProps {
    name: string
}

export default function ListItem(props: ListItemProps){
    const {name} = props;
    return <p>{name}</p>
}