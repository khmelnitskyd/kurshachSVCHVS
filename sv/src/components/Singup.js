import React, {useState} from 'react'

import "./Singup.css";
import UserService from "../services/UserService";

export default function Singup() {

    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const user = {userName,email,password}

       
        UserService.createUser(user).then((response) => {

                console.log(response.data)
                alert("Вы успешно зарегистрировались")
                

            }).catch(error => {
                console.log(error)
                alert("Произошла ошибка, имя пользователя возможно занято")
            })
        

    }

    return (
        <section className="Singup">

            
                <div class="title">Welcome</div>


                <div class="subtitle">Let's create your account!</div>
                <div class="group">
                    <input type="text" value={userName}  onChange={(e) => setuserName(e.target.value)} required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>User</label>
                </div>
                <div class="group">
                    <input type="text" value={email}  onChange={(e) => setemail(e.target.value)} required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>E-mail</label>
                </div>
                <div class="group">
                    <input type="password" value={password}  onChange={(e) => setpassword(e.target.value)} required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Password</label>
                </div>
                <button className="btnSubmit" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
            
        </section>
    )
}
