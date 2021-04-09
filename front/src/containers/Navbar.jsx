import React, {useState, useEffect} from "react"
import axios from "axios"
import { searchMovies, setMovies } from "../store/state/movies"
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom"
import style from "../styles/navbar.module.css"

const api = "https://www.omdbapi.com/?apikey=20dac387";

export default () => {

  let token = localStorage.getItem("token")
  const dispatch = useDispatch();
  const [value, setValue] = useState("")
  const history = useHistory()
  
  // useEffect(() => {
  //   if(token) {
  //     axios.post("/api/private", token)
  //     .then(data => console.log(data))
  //   }
  // })


  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchMovies(value))
    history.push('/')
  }

  const logOut = (e) => {
    token = null
    localStorage.clear()
    
  }

  const backToAllMovies = () => {
    dispatch(setMovies())
    history.push('/')

  }

    return(

    <div className={style.topnav}>
    <img onClick={backToAllMovies} src="https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png" alt="imdb logo" width="60" height="30" />
    <form onSubmit= {handleSubmit}>
    <input placeholder="Search any movie..." onChange= {handleChange} name= "movies"/>
    </form>
    { !token ? 
    <Link to={"/login"}> 
    <div className={style.child} >
    LOG IN
    </div>
    </Link> 
    :
    <Link to={"/"}> 
    <div onClick={logOut} className={style.child} >
    LOG OUT
    </div>
    </Link> } 
    { !token &&
    <Link to={"/register"}>
    <div className={style.child} >
    SIGN UP
    </div>
    </Link>
    }
    
    
    </div>

)}