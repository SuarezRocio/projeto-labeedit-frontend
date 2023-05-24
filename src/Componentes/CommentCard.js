import HomePage from '../Pages/HomePage/HomePage'
import { Router, native } from 'react-router-dom';

export default function CommentCard(props){

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
  
          await axios.comment(BASE_URL + `/comment/${comment.id}`, body, config)
  
          setIsLoading(false)
          fetchPost()
      } catch{
          window.alert(error?.data?.response) 
      }
  }
  
  
  return(
  
  
      <div>
          <h2>{comment.name}</h2>
          <span onClick={likes} style = {{ cursor : "pointer"}}>
          {" "} ok {comment.likes}
          </span>
  
          <h3>criado por {comment.creator.name}</h3>
      </div>
  
  
  )}