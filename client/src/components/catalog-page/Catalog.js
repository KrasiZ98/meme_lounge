import { useContext } from "react"
import { MemeContext } from "../../context/MemeContext"
import { Item } from "./Item";

export const Catalog = () => {
    const { memes } = useContext(MemeContext);

    return (
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                {/* <!-- Display : All memes in database ( If any ) --> */}
                {memes.length > 0 ? memes.map(x => <Item key={x._id} meme={x} />)
                    : <p className="no-memes">No memes in database.</p>}
                {/* <!-- Display : If there are no memes in database --> */}

            </div>
        </section>
    )
}