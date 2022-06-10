import {useState} from 'react'

export const Login = () => {
    const [formData,setFormData] =useState({});

    const handleChange=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleLogin=async()=>{
       console.log(formData)
    // const {data}=await axios.post(
    //     "http://localhost:8080/"
    // )
    }
  return (
    <div>
        <input type="text" name="username" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button onClick={handleLogin}>Submit</button>
        
    </div>
  )
}
