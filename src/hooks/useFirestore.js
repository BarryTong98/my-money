import {useReducer} from "react";
import {projectFirestore, timestamp} from "../firebase/config";


let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return {...state, isPending: true, success: false, error: null, document: null}
        case 'ADDED_DOCUMENT':
            return {...state, isPending: false, document: action.payload, success: true, error: null}
        case 'ERROR':
            return {...state, isPending: true, success: false, error: action.payload, document: null}
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    // collection ref
    const ref = projectFirestore.collection(collection)

    // add a document
    const addDocument = async (doc) => {
        dispatch({type: 'IS_PENDING'})
        try {
            const createAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({...doc, createAt})
            dispatch({type: 'ADDED_DOCUMENT', payload: addedDocument})
        } catch (err) {
            dispatch({type: 'ERROR', payload: err.message})
        }
    }

    // delete a document
    const deleteDocument = async (id) => {

    }
    return {addDocument, deleteDocument, response}
}