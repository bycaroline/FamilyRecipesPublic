import React from 'react'
import { useState, useEffect } from "react";
import { db } from './firebase'
import { query, collection, onSnapshot, doc, updateDoc, addDoc, getDocs, serverTimestamp, Timestamp, orderBy, deleteDoc } from 'firebase/firestore'
import EditContent from './EditContent';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Navbar from './Navbar';
import NavbarSignedIn from './NavbarSignedIn';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext'






// delete double check
function Modal({ open, onClose, onDel, receTitle }) {

    if (!open) return null

    return (
        <div className='bg-white/80 w-full h-[200px] z-10 mt-4 rounded-lg flex justify-center flex-col'>
            <div className='flex justify-end pr-4'>
                <AiOutlineCloseCircle size='25' onClick={onClose} />
            </div>

            <div className=' text-center '>
                <p >Deleting "{receTitle}" recipe can´t be undone</p>
            </div>
            <div>
                <p className='mt-2  text-center '>Are you sure you want to delete it?</p>
            </div>
            <div className='flex justify-center'>
                <button className='text-lg bg-[#8756EF] mt-6 text-white  
                rounded-lg p-2 px-10  hover:shadow-lg' onClick={onDel}>Yes delete</button>
            </div>
        </div >
    )
}






function ReadRece({ rec }) {


    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')
    const [rece, setRece] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [permissionDenied, setPermissionDenied] = useState(false)

    const refresh = () => window.location.reload(true)

    const receCollectionRef = collection(db, 'recipes')

    //read
    useEffect(() => {
        const getRece = async () => {
            const data = await getDocs(receCollectionRef);
            setRece(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getRece();
    }, []);


    //delete
    const deleteRece = async (id) => {
        console.log('deleted' + id)
        const recDoc = doc(db, 'recipes', id);
        await deleteDoc(recDoc)
        refresh();
    }

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
                <div className='w-[90%] md:w-[50%] m-auto flex justify-center flex-col '>
                    <div className='text-center mt-12'>
                        <h1>Recipes</h1>
                    </div>


                    <div className='flex-col flex'>

                        {rece.map((rec) => {

                            return <div key={rec.id}>

                                <h2 className='text-[#D56AF0] mt-14 mb-4 font-medium'> {rec.title} </h2>
                                <p className='text-white'>{rec.ingredientOne}</p>
                                <p className='text-white'>{rec.ingredientTwo}</p>
                                <p className='text-white'>{rec.ingredientThree}</p>
                                <p className='text-white'>{rec.ingredientFour}</p>
                                <p className='text-white'>{rec.ingredientFive}</p>
                                <p className='text-white'>{rec.ingredientSix}</p>
                                <p className='text-white'>{rec.ingredientSeven}</p>
                                <p className='text-white'>{rec.ingredientEight}</p>
                                <p className='text-white'>{rec.ingredientNine}</p>
                                <p className='text-white'>{rec.ingredientTen}</p>

                                <p className='text-white mt-4'>{rec.content}</p>
                                <div className='flex justify-end mr-8'>
                                    <button onClick={function (event) { setOpenModal(true); setShowButton(false) }}
                                        className={showButton ? 'text-sm text-[#D7D7D7] border-2 border-[#D7D7D7] mt-4 mb-6 rounded-lg p-1 px-2 hover:text-[#D7D7D7] hover:border-white '
                                            : 'hidden'}>delete recipe</button>
                                </div>


                                <Modal
                                    open={openModal}
                                    onClose={() => setOpenModal(false)}
                                    onClose={function (event) { setOpenModal(false); setShowButton(true) }}
                                    onDel={() => deleteRece(rec.id)}
                                    receTitle={rec.title}
                                />



                            </div>

                        })}

                    </div >


                </div >



            </div >
        </div >
    )
}

export default ReadRece