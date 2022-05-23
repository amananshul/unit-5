import React,{useEffect, useState} from 'react'
import axios,{AxiosResponse} from 'axios'
import {Table} from './Table'
type laptop = { 
  
  model: string;
  year: number;
  operating: string;
  height: number;
  width: number;
  price: number;
}
export const Product = () => {
  const [form, setForm] = useState({});
  const [Data, setData] = useState<laptop[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/laptop")
      .then((res: AxiosResponse<laptop[]>) => {
        const { data } = res;
        setData(data);
      });
  };

  const handleChange = (e:any) => {
    const name=e.target.name;
    const value=e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios.post("http://localhost:8080/laptop", form).then(getData);
  };


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <h1>Enter Laptop Details : </h1>
        <div>
        <label>Model : </label>
        <input type='text' placeholder='Product'   name="model" onChange={handleChange}/>
        </div>
        <div>
        <label>Make Year : </label>
        <input type="number" name="year"  onChange={handleChange} />
        </div>
        <div>
        <label>Operating System : </label>
        <input type="text" name="operating" onChange={handleChange} />
        </div>
        <div>
        <label>Screen Height : </label>
        <input type="number" name="height"   onChange={handleChange} />
        </div>
        <div>
        <label>Screen Width : </label>
        <input type="number" name="width"  onChange={handleChange}/>
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price"  onChange={handleChange}/>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
        </form>
        <Table Data={Data} />
    </div>
  )
}
