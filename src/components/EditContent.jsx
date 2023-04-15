import React from 'react'
import { useState, useEffect } from "react";



function EditContent({ rec, setEditContent }) {

    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')
    const [rece, setRece] = useState([])
    // const receCollectionRef = collection(db, 'recipes')
    // const [editContent, setEditContent] = useState(false)



    return (
        <div>
            <p>edit content</p>
            <input type="text" placeholder='new content' onChange={(event) => { setNewContent(event.target.value) }} />
            <button
                onClick={() => { setEditContent(false) }}>
                Confirm change of content</button>
        </div>
    )
}

export default EditContent