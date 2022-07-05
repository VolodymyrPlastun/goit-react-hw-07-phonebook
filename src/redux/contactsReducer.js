import { createReducer } from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import { fetchContact, removeContact, addContact } from "./contactsOperation";
import {filterContaсts} from './contactsActions';

const items = createReducer([], {
    [fetchContact.fulfilled]: (_, action) => action.payload,
    [addContact.fulfilled]: (state, action) => {
        return [...state, action.payload]
    },

[removeContact.fulfilled]: (state, action) => {
   return state.filter(({id}) => id !== action.payload)
}


})

const filter = createReducer('', {
    [filterContaсts]: (_, action) => {
        return action.payload;
   }
})

// const error = createReducer(null, {
//     [fetchContact.rejected]: (_, action) => action.payload,
//     [fetchContact.pending]: () => null,
// })

// const loading = createReducer(false, {
//     [fetchContactRequest]: () => true,
//     [fetchContactSuccsess]: () => false,
//     [fetchContactError]: () => false,
//     [addContactRequest]: () => true,
//     [addContactSuccsess]: () => false,
//     [addContactError]: () => false,
//     [removeContactRequest]: () => true,
//     [removeContactSuccsess]: () => false,
//     [removeContactError]: () => false,    
// })

export default combineReducers({
    items,
    filter,
    // error,
    // loading
})