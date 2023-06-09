// Not Found
import React from "react";
import { Result } from 'antd';
import "./index.less";

const NotFound = () => {
  return (
    <div className="not-found">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />,
    </div>
  );
};
export default NotFound;