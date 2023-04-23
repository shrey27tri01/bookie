function List(props){
    function handleClick(){
        props.deletion(props.id)
    }
  return (
      <div className="note">
        id: {props.id}
        <h1 >  Title: {props.title} </h1>
        <p > Author: {props.author}</p>
        <p > ISBN: {props.isbn}</p>
        <p > Publication Year: {props.publication_year}</p>
        <button onClick={handleClick}>Delete</button>
      </div>
  )
}

export default List;