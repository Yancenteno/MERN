import React from 'react'

const EditForm = () => {
    const { onSubmitHandler, initialTitle, initialBody } = props
    const [title, setTitle] = useState(initialTitle);
    const [body, setBody] = useState(initialBody)

    return (
        <form onSubmit={e => { onSubmitHandler(e, { title, body }) }} >
            <label>Note Title</label>
            <br />
            <input type="text" name='title' onChange={(e) => { setTitle(e.target.value) }} value={title} />
            <br />
            <label>Note Body</label>
            <br />
            <input type="text" name='body' onChange={(e) => { setBody(e.target.value) }} value={body} />
            <button>Write this note!</button>
        </form>
    )
}

export default EditForm