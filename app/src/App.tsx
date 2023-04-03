
import './App.css'
import Main from "./components/Main";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
// @ts-ignore
import {fetchPosts} from "./redux/slices/postSlice";

function App() {

    const dispatch = useDispatch()
    // @ts-ignore
    const posts = useSelector(state => state.post.posts.slip)
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
