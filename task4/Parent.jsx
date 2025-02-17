import Child from "./child";
const Parent = () => {
    const details = [
        {
            name:"Vijii",
            age:20,
            profession:"Full stack developer",
            picture:"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="      
         },
         {
            name:"Rishi",
            age:22,
            profession:"Full stack developer",
            picture:"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="      
         }
    ]
    return(
        <div>
            <h1>This is Parent component</h1>
            <Child details={details}/>
        </div>
    )
}
export default Parent;