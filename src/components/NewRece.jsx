import React from 'react'
import { useState, useEffect } from "react";
import { db } from './firebase'
import { query, collection, onSnapshot, doc, updateDoc, addDoc, getDocs, serverTimestamp } from 'firebase/firestore'
import Navbar from './Navbar';
import NavbarSignedIn from './NavbarSignedIn';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext'


const button = {
    buttonA: 'text-l md:text-lg bg-[#8756EF] mt-4 text-white  rounded-lg p-2 px-10  hover:shadow-lg'
}



function NewRece() {

    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')

    const [newIngredientOne, setNewIngredientOne] = useState('')
    const [newIngredientTwo, setNewIngredientTwo] = useState('')
    const [newIngredientThree, setNewIngredientThree] = useState('')
    const [newIngredientFour, setNewIngredientFour] = useState('')
    const [newIngredientFive, setNewIngredientFive] = useState('')
    const [newIngredientSix, setNewIngredientSix] = useState('')
    const [newIngredientSeven, setNewIngredientSeven] = useState('')
    const [newIngredientEight, setNewIngredientEight] = useState('')
    const [newIngredientNine, setNewIngredientNine] = useState('')
    const [newIngredientTen, setNewIngredientTen] = useState('')

    const [rece, setRece] = useState([])
    const receCollectionRef = collection(db, 'recipes')
    const [created, setCreated] = useState(false)



    // create recipe
    const createRece = async (e) => {
        e.preventDefault()
        setCreated(true)
        await addDoc(receCollectionRef, {
            title: newTitle,
            ingredientOne: newIngredientOne,
            ingredientTwo: newIngredientTwo,
            ingredientThree: newIngredientThree,
            ingredientFour: newIngredientFour,
            ingredientFive: newIngredientFive,
            ingredientSix: newIngredientSix,
            ingredientSeven: newIngredientSeven,
            ingredientEight: newIngredientEight,
            ingredientNine: newIngredientNine,
            ingredientTen: newIngredientTen,
            content: newContent
        });

    };

    //logout
    const navigate = useNavigate()

    const { user, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.log('logged out')
        }
        catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div>
            {user ? <NavbarSignedIn /> : <Navbar />}
            <div className='w-full md:h-screen '>
                <div className='w-[90%] md:w-[60%] m-auto flex justify-center flex-col '>
                    <div className='text-center mt-10 md:mt-20'>
                        <h1>Create recipe</h1>
                    </div>


                    <div className='flex-col flex items-center'>
                        <form onSubmit={createRece}>
                            <div>
                                <input className='p-2 rounded-lg mt-10 w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewTitle(event.target.value) }}
                                    type="text"
                                    placeholder="Title..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientOne(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>

                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientTwo(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientThree(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientFour(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientFive(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientSix(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientSeven(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientEight(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientNine(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>
                            <div>
                                <input className='p-1 mt-4 rounded-lg w-[340px] md:w-[760px]'
                                    onChange={(event) => { setNewIngredientTen(event.target.value) }}
                                    type="text"
                                    placeholder="Ingredient..."
                                />
                            </div>






                            <div>

                                <textarea className='whitespace-pre-wrap p-2 rounded-lg mt-4 w-[340px] md:w-[760px] '
                                    onChange={(event) => { setNewContent(event.target.value) }}
                                    type="textarea"
                                    placeholder="Description..."
                                    rows='16'
                                />
                            </div>
                            <div className='flex mb-12'>

                                <button className={button.buttonA}>Submit recipe</button>


                                <a href="/all-recipes"><p className={!created ? 'hidden' :
                                    'md:ml-56 text-l md:text-lg text-white border-2 px-3 py-3 md:px-10 ml-4 mt-4 border-[#D56AF0] rounded-lg p-0 md:p-2  hover:text-[#D7D7D7] hover:border-[#8A5F95] '}
                                > Recipe created! See all recipes</p></a>

                            </div>
                        </form>
                        <div>

                        </div>


                    </div>
                </div>
            </div >
        </div >
    )
}

export default NewRece