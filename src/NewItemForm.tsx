import {useState} from 'react'
import {NewItemFormContainer, NewItemButton, NewItemInput} from "./styles"

//defining the NewItemFormProps type
type NewItemFormProps = {
    onAdd(text: string): void
}