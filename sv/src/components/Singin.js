import React, {useState} from 'react'
import "./Singup.css";
import UserService from "../services/UserService";

export default function Signin() {

    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [check, setcheck] = useState('')

    const searchUser = (userName) => {
        UserService.getUserByUsername(userName).then((response) => {

            console.log(response.data);
            
           if(String(check.password)===password)
           {
            alert("Вы успешно авторизировались")
           }
           else
           {
            alert(check.password+"     "+password)
            
           }
           
        }).catch(error => {
            console.log(error);
            alert("false")
        })
    }

    const tempCheck = (userName) => {
        UserService.getUserByUsername(userName).then((response) => {
            setcheck(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <section className="Singup" onMouseMove={(e) => tempCheck(userName)}>

            
                <div class="title">Welcome!</div>
                <div class="group">
                    <input type="text" value={userName}  onChange={(e) => setuserName(e.target.value)}   required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>User</label>
                </div>
                
                <div class="group">
                    <input type="password" value={password}  onChange={(e) => setpassword(e.target.value)}  required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Password</label>
                </div>
                <button className="btnSubmit"  onClick={() => searchUser(userName)}>Submit</button>
                
            
        </section>
    )
}
