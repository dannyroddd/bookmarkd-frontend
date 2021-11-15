import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props){

const [books, setBooks] = useState(null)

//heroku url
const URL = "https://bookmark-0.herokuapp.com/bookmarks/"

const getBook = async ()=>{
    const response = await fetch(URL)
    const data =await response.json()
    setBooks(data)
}

const createBook = async (oneBook) =>{
  
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(oneBook),
    })
    
    getBook()
}

const updateBook = async (oneBook, id) =>{
  
    await fetch(URL + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(oneBook)
    })
  
    getBook()
}

const deleteBook = async (id) =>{
    await fetch(URL + id, {
        method: "delete"
    })
    getBook()
}
useEffect(()=> getBook(), [])

    return (
    <main>
        <Switch>
            <Route exact path="/">
                <Index books={books} createBook={createBook}/>
            </Route>
            <Route exact path="/bookmarks/:id" 
            render={(rp) => (
                <Show 
                {...rp}
                books={books}
                updateBook={updateBook}
                deleteBook={deleteBook}
                />
            )}
            />
                
            
        </Switch>
    </main>
        )
  } 
  
  export default Main