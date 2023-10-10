import { FaEllipsisH } from "react-icons/fa";
import { useState } from "react";
import ElipsisDetails from "./ElipsisDetails";

const Ellipsis =()=>{
    const [nowOpen, nowClose] = useState(false)
    
  
return <div className="elipsis rounded-circle fs-6 ">
   
<FaEllipsisH onClick={()=> nowClose((prev)=> !prev)}/>
{nowOpen && <ElipsisDetails/>}



</div>

}

export default Ellipsis;