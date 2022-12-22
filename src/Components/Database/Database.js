import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase.config';
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { useForm } from "react-hook-form";

import { updateDoc } from "firebase/firestore";


const Database = () => {

    const [userData, setUserData] = useState([]);

    // react form hook data upded in firebase stroage
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data, e) => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: data.name,
                email: data.email,
                text: data.text
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        };
        e.target.reset();
    };

    // automatic database theke data porar jonna ata

    useEffect(() => {
        const handelReadData = async () => {
            const data = await getDocs(collection(db, "users"));
            setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        };
        handelReadData();
    }, [userData])

    // firebase theke data delet korar jonna

    const handelDelet = async (id) => {
        await deleteDoc(doc(db, "users", id));
    };

    // firebase a kono kisu upded korar jonna

    const handelUpded = async (id, name) => {
        const washingtonRef = doc(db, 'users', id);
        const newName = { name: name + name }
        await updateDoc(washingtonRef, newName);
    }


    return (
        <div className='Data'>
            <button onClick={handelDelet}>Delet</button>
            <div>
                {/* state ta mapink korar jonna */}
                {
                    userData.map(user => {
                        return <div key={user.id}>
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>
                            <h1>{user.text}</h1>
                            <button onClick={() => { handelUpded(user.id, user.name) }}> Upded name</button>
                            <button onClick={() => handelDelet(user.id)}>Delet</button>
                        </div>
                    })
                }
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} /> <br />
                    <input {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>} <br />
                    <textarea  {...register("text")} />
                    <input type="submit" />
                </form>
            </div>
        </div>

    );
};

export default Database;