import "./App.css"
import SingleProduct from "./components/SingleProduct"
import Main from "./views/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={ <Main/> }/>
                    <Route path="/product/:id" element={ <SingleProduct /> }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App