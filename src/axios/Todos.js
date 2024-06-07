import React ,{useState , useEffect} from 'react'
import axios from 'axios'

const Url="https://jsonplaceholder.typicode.com/todos"
 const Todos = () => {
const [todo , setTodos] = useState([])
const [search , setSearch] = useState('')
const fetchTodos=() =>{
    axios.get(Url).then((res)=>{
    setTodos(res.data);
    }).catch((err)=>{
    console.log(err);
    })
}

useEffect(()=>{
    fetchTodos()
},[])

  return (
  <>
  <div>Todos</div>
  <input type="text" placeholder='enter your text' onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
  <div>
    {
    todo.filter((item)=>item.title.toLowerCase().includes(search)).map((item)=>{
      return   <div 
      className="input"
      style={{ color: item.completed ? 'text-success' : 'text-warning' }}
    >
      {item.completed}
    </div>
      
      
      
      // <div key={item.title}>{item.title}</div>
    })
    }
    {
    todo.filter((item)=>item.title.toLowerCase().includes(search)).length===0&&(
        <>
        {
           `this title not exist ${search}`
        }
            
   
        </>
    )
    }
  </div>
  </>

  )
}

export default Todos