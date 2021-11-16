import { useState } from "react";

function Show(props) {
    const id = props.match.params.id
    const book= props.books.find((singleBook) => {
        return singleBook._id === id
    })

    // state for form
    const [editForm, setEditForm] = useState(book)

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateBook(editForm, book._id)
        props.history.push("/")
    }

    const removeBook = () => {
        props.deleteBook(book._id)
        props.history.push("/")
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <h3><a href={book.url}>{book.url}</a></h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="title" value={editForm.title} onChange={handleChange} />
                <input type="text" name="url" placeholder="url" value={editForm.url} onChange={handleChange} />
                <input type="submit" value="Update Bookmark" />
            </form>
            <button onClick={removeBook} id="delete">DELETE</button>
        </div>
    )
}

export default Show;