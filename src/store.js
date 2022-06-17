import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'kim' ,age : 20},
  reducers : {
    changeName(state){
        state.name = 'park'
    },
    increase(state, action){
        state.age = state.age+action.payload
    },
  }
})

export let { changeName ,increase } = user.actions 

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 11, name : 'White and Black',price : 1000, count : 1},
      {id : 12, name : 'Grey Yordan',price : 4000,  count : 1},
      {id : 13, name : 'oh my god',price : 2000,  count : 1}
    ],
    reducers : {
      addCount(state,action){
        let 번호 = state.findIndex((a)=>{return a.id === action.payload})
        state[번호].count++
        // state[action.payload].count++
      },
      addItem(state, action){
        state.push(action.payload)
      },
     
    }
  })
  
export let { addCount,addItem,multiply } = cart.actions 

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
})

