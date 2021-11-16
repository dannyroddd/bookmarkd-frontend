import { useState } from "react"
import { Link } from "react-router-dom"

function Index(props) {
    //state to hold form data
    const [newForm, setNewForm] = useState({
        title: "",
        url: "",
    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }
    // handleSubmit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createBook(newForm)
        setNewForm({
            title:"",
            url:"",
        })
    }

    const loaded = () => {

        //sort books in index in alphabetical order when they load
        const inAlphOrder = props.books.sort((a,b)=>{
            if (a.title < b.title) return -1;
            return 1;
        })
        
        return (
            <section>
                {props.books.map((book) =>(
                    <div>
                        <Link to={`/bookmarks/${book._id}`}><h1>{book.title}</h1></Link>
                        <h3>
                            <a href={book.url}>{book.url}</a></h3>
                    </div>
                ))}
                
            </section>
        )
    }


    const loading= () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="title" value={newForm.title} onChange={handleChange} />
                <input type="text" name="url" placeholder="url" value={newForm.url} onChange={handleChange} />
                <input type="submit" value="Create Bookmark" />
            </form>
           
        {props.books ? loaded() : loading()}    
        </section>
    )
}

export default Index;

