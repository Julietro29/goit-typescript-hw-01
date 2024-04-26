import { createSelector } from 'reselect';

export const selectFilteredContacts = createSelector(
  state => state.contacts.items,
  state => state.filters.name,
  (items, filter) => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
