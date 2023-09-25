/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import Detail from "./Detail";

const Details = () => {
    

    const [detail, setDetail] = useState({});
    // const [detail, setDetail] = useState({});

    const {id} = useParams();
    

    const details = useLoaderData();
   

    useEffect(() => {
        const idInt = parseInt(id)
        const findDetails = details.find(item => item.id === idInt  );
        
        setDetail(findDetails)
    }, [details,id])
    

    

  return (
    <div>
       
       <Detail detail ={detail}></Detail>
       

    </div>
  )
}

export default Details