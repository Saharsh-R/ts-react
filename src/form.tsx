import { useState } from "react"


const defaultData = {
    title : '', 
    body: ''
}

function FormComponent() {
    const [data, setData] = useState(defaultData)
    const [final, setFinal] = useState(defaultData)
    let {title, body} = data //rendered every time you type hence will not be affected.

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setData(prevState => ({
            ...prevState, 
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFinal(data)
        setData(defaultData)
    }



    return (
        <>
            <h1>Form</h1>
            <form onSubmit = {onSubmit}>
                <label htmlFor="title">Enter the title: </label>
                <input type="text" id = {'title'} value = {title} onChange={onChange}/>
                <br />

                <label htmlFor="body">Enter the body: </label>
                <input type="text" id = {'body'} value = {body} onChange={onChange}/>
                <br />

                <button type='submit'>Submit</button>
            </form>
            {final.title ? <pre>{JSON.stringify(final, null, 2)}</pre> : <p>Please submit something</p>}
        </>
    )
}

export default FormComponent