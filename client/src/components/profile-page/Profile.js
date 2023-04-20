import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { MemeContext } from "../../context/MemeContext";
import { MyMemes } from "./MyMemes";

export const Profile = () => {
    const { user } = useContext(AuthContext);
    const { memes } = useContext(MemeContext);

    const myMemes = memes.filter(x => x._ownerId === user._id);
    console.log(myMemes.length)


    return (
        <section id="user-profile-page" className="user-profile">
            <article className="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png" />
                <div className="user-content">
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>My memes count:{myMemes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div className="user-meme-listings">
                {/* <!-- Display : All created memes by this user (If any) --> */}
                {myMemes.length > 0 ? myMemes.map(x => <MyMemes key={x._id} meme={x} />)
                    : <p className="no-memes">No memes in database.</p>}


                {/* <!-- Display : If user doesn't have own memes  --> */}

            </div>
        </section>

    )
}