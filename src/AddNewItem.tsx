import {useState} from 'react'
import {AddItemButton} from "./styles"

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

//When the showForm boolean state is true, we show the input wit the "Create button"
//When its false, the button will render with the toggleButtonText on it
export const AddNewItem = (props: AddNewItemProps) =>{
    const [showForm, setShowForm] = useState(false);
    const {onAdd, toggleButtonText, dark} = props;

    if(showForm){
        //We show item creation form here
    }

    return(
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>{toggleButtonText}</AddItemButton>
    )
}