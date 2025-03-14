function Card(props)
{
    return(
        <div style={{backgroundColor:props.bgcolor}} className="card_conatiner">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
    )
}

export default Card