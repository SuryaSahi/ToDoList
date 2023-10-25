"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask , {title,desc}])
    setdesc("")
    settitle("")
  }
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i , 1)
    setMainTask(copytask)
  }
  let rendertask = <h2>No Task Available</h2>  

  if(mainTask.length > 0){
    rendertask = mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mb-4'>
        <div className='flex items-center justify-between w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h2 className='text-xl font-semibold'>{t.desc}</h2>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}
      className='px-4 py-2 bg-red-400 text-white rounded font-bold'>
        Delete</button>
      </li>
    );
  })
  }
  return (
    <>
    <h1 className=' bg-black text-cyan-50 text-5xl font-bold p-5 text-center'>Surya's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-900 border-4 m-8 px-4 py-2'
      placeholder = "Enter Title here"
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      
      />

      <input type="text" className='text-2xl border-zinc-900 border-4 m-8 px-4 py-2'
      placeholder = "Enter description"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}  
      />

      <button className='bg-black text-white px-4 py-2 text-center font-bold rounded m-4'>Add task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-300'>
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default page