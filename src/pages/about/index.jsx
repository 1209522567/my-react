import { Button } from 'antd'
import { useNavigate } from "react-router-dom";

function About() {
   const navigate = useNavigate()
   return (
      <div>
         <h3>about页</h3>
         <Button type="dashed" onClick={ () => navigate(-1) }>返回</Button>
      </div>
   )
}

export default About