// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './contactsOperations';

// const items = createReducer([], {
//     [fetchContacts.fulfilled]: (_, action) => action.payload,
//     [addContact.fulfilled]: (contact, action) =>
//         console.log(Object.keys(contact)),
//     // [deleteContact.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false,
//     [addContact.pending]: () => true,
//     [addContact.fulfilled]: () => false,
//     [addContact.rejected]: () => false,
//     [deleteContact.pending]: () => true,
//     [deleteContact.fulfilled]: () => false,
//     [deleteContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//     [fetchContacts.rejected]: (_, action) => action.payload,
//     [fetchContacts.pending]: () => null,
//     [addContact.rejected]: (_, action) => action.payload,
//     [addContact.pending]: () => null,
//     [deleteContact.rejected]: (_, action) => action.payload,
//     [deleteContact.pending]: () => null,
// });

// export default combineReducers({
//     items,
//     isLoading,
//     error,
// });
