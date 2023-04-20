import { Link, useParams } from "react-router-dom"
import useGetbyId from "../../hooks/hooks-requests/useGetById";
import { useContext } from "react";
import { MemeContext } from "../../context/MemeContext";
import { AuthContext } from "../../context/AuthContext";

export const Details = () => {
    const params = useParams();
    const [meme, setMeme] = useGetbyId(params.id, []);
    const { deleteMeme } = useContext(MemeContext);
    const { user } = useContext(AuthContext)
    const isOwner = meme._ownerId === user._id;

    return (
        <section id="meme-details">
            <h1>Meme Title: {meme.title}

            </h1>
            <div className="meme-details">
                <div className="meme-img">
                    <img alt="meme-alt" src={meme.imageUrl} />
                </div>
                <div className="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        {meme.description}
                    </p>

                    {/* <!-- Buttons Edit/Delete should be displayed only for creator of this meme  --> */}
                    {isOwner && <>
                        <Link className="button warning" to={`/edit/${meme._id}`}>Edit</Link>
                        <button className="button danger" onClick={() => deleteMeme(params.id)}>Delete</button>
                    </>}


                </div>
            </div>
        </section>
    )
}