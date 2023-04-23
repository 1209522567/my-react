import { fetchList } from "../api/index";
import { Button } from "antd";
function Home() {
   const getList = async () => {
      let data = await fetchList()
      console.log(data);
   }
   return (
      <div>
         <div>首页</div>
         <Button type="default" onClick={ getList }>点击</Button>
      </div>
   )
}

export default Home