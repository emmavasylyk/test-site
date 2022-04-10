export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

// export const getVisibleContact = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
