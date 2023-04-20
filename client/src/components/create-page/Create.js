import useFormCreate from "../../hooks/hooks-forms/useFormCreate"

export const Create = () => {
    const { value, changeValue, onSubmit } = useFormCreate()
    return (
        <section id="create-meme">
            <form id="create-form" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Meme</h1>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" value={value.title} onChange={changeValue}/>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" value={value.description} onChange={changeValue}></textarea>
                    <label htmlFor="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" value={value.imageUrl} onChange={changeValue}/>
                    <input type="submit" className="registerbtn button" value="Create Meme" />
                </div>
            </form>
        </section>
    )
}