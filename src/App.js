import './App.css';
import { connect } from "react-redux"
import { addList, Completed, ClearAll } from './actions'
import { useState } from 'react';
import { BiRadioCircle } from 'react-icons/bi'
import { MdDone } from 'react-icons/md'
import { FcTodoList } from 'react-icons/fc'
const App = (props) => {
  const [text, setText] = useState("");
  return (
    <div className="flex mt-20   justify-center items-center">
      <div className='relative space-x-5'><h1 className='flex font-extrabold '><FcTodoList size={30} />Mkaraca To Do List</h1>
        <div className='flex border p-1 rounded-md w-80 h-10 mt-10'>
          <div className=''>
            <input className="outline-none p-1"  placeholder='Add new list item'
              value={text} onChange={e => setText(e.target.value)} /></div>
          <div className='text-white ml-14  bg-blue-600 w-14 h-18 p-1  text-center rounded-b-lg'><button
            onClick={() => {
              if (text === "") {
                alert("Please enter value")
              } else {
                setText("");
                props.addList(text)
              }
            }}>Add</button></div>
        </div>
        <div className='list ' >
          {props.list.map(item => (
            <div onClick={() => props.Completed(item.id)} key={item.id}
              className={item.completed ? "done" : ""}><div className='
            fixed text-white bg-green-700 rounded-2xl'>{item.completed && <MdDone size={28} />}</div>
              <div className='flex'>
                <div className='Completed' >
                  <div><BiRadioCircle size={28} /></div>
                </div><div className='font-semibold ml-2 hover:text-blue-600'>{item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className='flex space-x-40'>
          <div className=' space-x-4'>
            {props.list.length} item selected
          </div>
          <div ><button onClick={() => props.ClearAll()}>Clear All</button></div>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}
export default connect(mapStateToProps, { addList, Completed, ClearAll })(App);

