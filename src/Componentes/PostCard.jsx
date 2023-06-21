import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL, TOKEN_NAME } from "../constants/url";
import { GlobalContext } from "../contexts/GlobalContext";

export default function PostCard(props){

  const {post} = props;  

const context = useContext(GlobalContext)
const {fetchPost} = context;

const [isLoading, setIsLoading] = useState(false)


const likes = async () => {
    setIsLoading(true)

    try{
        const token = window.localStorage.getItem(TOKEN_NAME);

        const config ={
            headers :{
                Authorization: token
            }
        }

        const body ={
            like : true
        }

        await axios.post(BASE_URL + `/post/${post.id}`, body, config)

        setIsLoading(false)
        fetchPost()
    } catch{
        window.alert(error?.data?.response) 
    }
}


return(


    <div>
        <h2>{post.name}</h2>
        <span onClick={likes} style = {{ cursor : "pointer"}}>
        {" "} ok {post.likes}
        </span>

        <h3>criado por {post.creator.name}</h3>
    </div>


)}
