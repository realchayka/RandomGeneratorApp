
import './App.css'
import Main from "./components/Main";
import {useEffect} from "react";
// @ts-ignore
import {fetchPosts} from "./redux/slices/postSlice";
import {useAppDispatch, useAppSelector} from "./hook";

function App() {

    const dispatch = useAppDispatch()
    // @ts-ignore
    const posts = useAppSelector(state => state.post.posts.slip)
    const newMessage = () => {
        dispatch(fetchPosts())

    }
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    console.log(posts)
  return (
    <div className="App">
        <Main newMessage={newMessage} {...posts}/>
    </div>
  )
}

export default App
