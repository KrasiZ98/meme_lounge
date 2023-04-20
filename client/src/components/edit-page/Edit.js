import { useParams } from "react-router-dom"
import useFormEdit from "../../hooks/hooks-forms/useFormEdit";

export const Edit = () => {
    const params = useParams();

    const { value, changeValue, onSubmit } = useFormEdit(params.id)

    return (
        <section id="edit-meme">
            <form id="edit-form" onSubmit={onSubmit}>
                <h1>Edit Meme</h1>
                <div className="container">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" value={value.title} onChange={changeValue}/>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"  value={value.description} onChange={changeValue}>
                        
                        </textarea>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl"  value={value.imageUrl} onChange={changeValue}/>
                    <input type="submit" className="registerbtn button" value="Edit Meme" />
                </div>
            </form>
        </section>
    )
}