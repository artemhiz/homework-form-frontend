import axios from 'axios'

export function sendMessage(rating, setRating, message, email, setLoading, setOpening) {
    axios.post("https://homework-form.onrender.com/", {
        rating: rating,
        message: message ? message : "",
        email: email ? email : "",
    }).then(data => {
        console.log(data);
        setRating(0);
        setLoading(false);
        setOpening(false);
    })
}