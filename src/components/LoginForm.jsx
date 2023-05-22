import React, { useState } from 'react'
import { auth } from '../database/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";

import './LoginForm.css';

  
  


export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [user, setUser] = useState(null);


    const onEmailLogin = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user)
                setUser(
                    {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                    }
                )
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                if (errorCode == "auth/email-already-in-use") {

                    alert('동일한 이메일이 있습니다');
                }
                else if (errorCode == "auth/weak-password") {
                    alert('비밀번호를 6자리이상 적어주세요')
                }
            });
    }


    const onClickLogin = () => {

        async function getLogin() {

            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log(user);
                setUser(
                    {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                    }
                )

            }

            catch (error) {
                console.log(error.code, error.message)
                if (error.code == "auth/user-not-found" ||
                    error.code == "auth/wrong-password") {
                    alert("없는 이메일이거나 비밀번호가 잘못되었습니다")
                }
            }
        }
        getLogin();

    }

    return (
        <div>
            <h3>로그인 또는 회원가입페이지 입니다</h3>
            <form onSubmit={onEmailLogin}>
                <label htmlFor="">이메일</label>
                <input type="email" required
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
                />
                <br />
                <label htmlFor="">비밀번호</label>
                <input type="password" required
                    onChange={(e) => { setPassword(e.target.value) }}
                    value={password}
                />
                <br />
                <input type="submit" value="회원가입" className='register' />
                <button type='button' onClick={onClickLogin} className='login'>로그인</button>
            </form>
            <h3>{user ? user.email : "로그인되지않았습니다"}</h3>
        </div>
    )
}