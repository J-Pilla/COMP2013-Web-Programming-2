export default function Card(props) {
    /*
      <Card image="src\assets\images\6.jpg"
      location="Bermuda"
      hotel="Staniel Cay Hotel"
      rating="3.2"
      price="365"/>*/
    return <div className="Card">
        <img src={props.image} alt="" width="100"/>
        <h3 className="Location">{props.location}</h3>
        <h4 className="Hotel">{props.hotel}</h4>
        <p className={
            props.rating >= 4 ? "Rating-Good" : "Rating-Bad"
        }>{props.rating} ★</p>
        <p className="Price">${props.price}/night</p>
    </div>
}
