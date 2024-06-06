import { useState } from "react"
import Loading from "./loading";
import { sendMessage } from "./server-interaction";

export default function Window({opened, setOpening}) {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    function preparingToSend() {
        if (rating !== 0) {
            setLoading(true);
            sendMessage(rating, setRating, message, email, setLoading, setOpening);
        }
    }

    return <div className={"bg" + (opened ? "" : " closed") + (rating > 0 ? " rating" + rating : "")}>
        <div className="window">
            <div className="heading">
                <button className="back"
                onClick={() => {
                    setOpening(false);
                    setRating(0);
                }}>{"<"}</button>
                <h1>Rate us</h1>
            </div>
            <div className="body">
                <div className="rating">
                    <button onClick={() => setRating(1)}>{rating >= 1 ? "★" : "☆"}</button>
                    <button onClick={() => setRating(2)}>{rating >= 2 ? "★" : "☆"}</button>
                    <button onClick={() => setRating(3)}>{rating >= 3 ? "★" : "☆"}</button>
                    <button onClick={() => setRating(4)}>{rating >= 4 ? "★" : "☆"}</button>
                    <button onClick={() => setRating(5)}>{rating >= 5 ? "★" : "☆"}</button>
                </div>
                {rating > 0 && rating <= 3 ? <div className="questionary">
                    <h3>We are so sorry we have not met your expectations {rating <= 2 ? rating <= 1 ? "☹️" : "🙁" : "😕"}</h3>
                    <label>
                        What made you upset in our services?
                        <input name="message" value={message} onChange={e => setMessage(e.target.value)}/>
                    </label>
                    <label>
                        Leave us your email if you want to receive a feedback from us
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                </div> : <h3>Your rating helps us to get better</h3>}
                {loading ? <Loading/> : <button 
                className="send"
                onClick={preparingToSend}
                disabled={rating > 0 ? "" : "true"}>
                    Send
                </button>}
            </div>
        </div>
    </div>
}