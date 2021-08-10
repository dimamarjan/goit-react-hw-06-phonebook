import {
    ContactListItem,
    ContactItemText,
    DelContactButton
} from 'views/ContactListView.style'

export function ContactListView({data}) {
    const { id, name, number } = data;
    
    return (
        <ContactListItem >
            <ContactItemText>{name}: {number}</ContactItemText>
            <DelContactButton
                value={id}
                onClick={e => console.log("del")}>
                Delete
            </DelContactButton>
        </ContactListItem>
    )
}
