const List =() => {
    const Mobiles = ["Redmi","Poco","vivo","apple","samsung"];
    return (
        <div>
            <ul>
                {Mobiles.map((mobile) => {
                    return <li>{mobile}</li>;
                })}
            </ul>
        </div>
    )
}
export default List;