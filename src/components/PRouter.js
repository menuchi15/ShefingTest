import { Route, Routes } from "react-router-dom";
import UserPosts from "./UserPosts";
import Home from "./Home";

export default function PRouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/posts/:user' element={<UserPosts />}></Route>
            </Routes>
        </div>
    )
}