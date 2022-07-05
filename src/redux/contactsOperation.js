import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://62c2f783ff594c65676ad5a8.mockapi.io/";


export const fetchContact = createAsyncThunk('contacts/fetchContact',
async (_, {rejectWithValue}) => {
    try {
        const contacts = await axios.get(`${BASE_URL}contacts/`);
    return contacts.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const addContact = createAsyncThunk('contacts/addContact',
async (contact, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${BASE_URL}contacts`, contact);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const removeContact = createAsyncThunk('removeContact/Status',
    async (id, {rejectWithValue}) => {
        try {
            await axios.delete(`${BASE_URL}contacts/${id}`)
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)



