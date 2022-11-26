import {Add, Clear, Toggle} from '../actions'

const initial_state={
  list:[
    {
      id:1,title:"Daily To Do list" ,completed:false,
    }
  ]
}

export const reducer=(state=initial_state,action)=>{
  switch (action.type) {
    case Add:
      return {...state, list:[...state.list,{
        id:state.list.length+1,
        title:action.payload,
        completed:false,
      }]};
      case Toggle:
        return{...state, list:state.list.map(item=>
          item.id===action.payload ? {...item ,completed:!item.completed}:item
        )};
      case Clear:
        return {
          ...state,
          list:state.list.filter(item=>item.length=0)
        }
      default: return state;
    }
}