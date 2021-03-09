import { useState, useEffect } from "react";
import axios from "axios";
import Subscriptions from "./Subscriptions";

const Add = () => {
  const [subs, setSubs] = useState([]);
  useEffect(() => {
    axios.get("/api/subs").then((res) => {
      setSubs(res.data);
    });
  }, []);
  console.log(subs);
  return (
    <div>
      {subs.map((sub) => {
        return <Subscriptions sub={sub} key={sub.sub_id} />;
      })}
    </div>
  );
};

export default Add;
