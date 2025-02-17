const Child = ({details}) => {
    return(
        <div className="flex gap-8 p-3">
            {details.map((info) => {
                return(
                    <div className="border-2">
                        <div>
                            <img src={info.picture} alt=""/>
                        </div>
                        <div>
                           <h2 className="text-red-700">Name : {info.name}</h2>
                           <h2 className="text-yellow-500">Profession : {info.profession}</h2>
                        </div>
                        </div>
                )
            })}
        </div>
    )
}
export default Child;