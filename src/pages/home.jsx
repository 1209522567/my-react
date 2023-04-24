import { fetchList } from "../api/index";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function Home() {
   const navigate = useNavigate()
   const getList = async () => {
      let data = await fetchList()
      console.log(data);
   }
   return (
      <div>
         <h3>首页</h3>
         <Button type="default" onClick={ () => navigate("/about") }>about</Button>
         &#x3000;
         <Button type="default" onClick={ getList }>点击</Button>
      </div>
   )
}

export default Home