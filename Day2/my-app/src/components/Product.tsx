import React from 'react'

export const Product = () => {

  return (
    <div>
        <form action="">
        <h1>Enter Laptop Details : </h1>
        <div>
        <label>Model : </label>
        <input type='text' placeholder='Product'  name=""/>
        </div>
        <div>
        <label>Make Year : </label>
        <input type="text" name="" />
        </div>
        <div>
        <label>Operating System : </label>
        <input type="text" name=""  />
        </div>
        <div>
        <label>Screen Height : </label>
        <input type="number" name=""   />
        </div>
        <div>
        <label>Screen Width : </label>
        <input type="number" name="" />
        </div>
        </form>
    </div>
  )
}
