import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { ContactListSection } from 'components/ContactList/ContactList.style'
import { ContactListView } from 'views/ContactListView';

export function ContactList() {
    const store = useSelector(store => store.items);
    const filterData = useSelector(store => store.filter);
    const [filteredArr, setFilteredArr] = useState([]);
    const [showFilteredList, setShowFilteredList] = useState(false);
    const [showList, setShoList] = useState(false);

    useEffect(() => {
        if (filterData) {
            if (toString(filterData)) {
                setFilteredArr([
                    ...store.filter((contact => {
                       return contact.name.indexOf(filterData) > -1;
                    }))
                ])
            };
            if (parseInt(filterData)){
                setFilteredArr([
                    ...store.filter((contact => {
                       return contact.number.indexOf(filterData) > -1;
                    }))
                ])
            };

        } else {
            setFilteredArr([]);
        }
    }, [filterData, store])

    useEffect(() => {
        if (filteredArr.length !== 0) {
            setShoList(false);
            setShowFilteredList(true);
        } else {
            setShowFilteredList(false);
            setShoList(true);
        }
    }, [filteredArr.length])


    return (
        <div>
            <ContactListSection>
                {showList && store.map((contactItem) => (
                   <ContactListView key={contactItem.id} data={contactItem} />
                ))}
                {showFilteredList && filteredArr.map((contactItem) => (
                   <ContactListView key={contactItem.id} data={contactItem} />
                ))}
            </ContactListSection>
        </div>
    );
};

