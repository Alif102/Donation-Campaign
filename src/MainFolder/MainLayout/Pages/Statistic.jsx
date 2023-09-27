import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";


// import { VictoryPie } from "victory"
const Statistic = () => {
 const [donation, setDonation] = useState(0);

  useEffect(()=>{
     setDonation(JSON.parse(localStorage.getItem('donation')).length)
  },[])
  
  let myDonation=((100/12)*donation).toFixed(2)
  let totalDonation=(100-myDonation).toFixed(2)

  // const myData = [
    
    
    
    
  // ];

  const myData1 = [
    { name : 'Total Donation' , value : parseFloat(totalDonation) , fill : 'purple'},
  
    { name : 'My Donation' , value : parseFloat(myDonation) , fill : '#00C49F'}
    
  ];

  return (
    <div className=" flex justify-center items-center ">


   <h2 className=" text-purple-800 text-2xl font-bold">Total Donation<span className="text-2xl w-20 font-bold">**</span></h2>





<PieChart width={400} height={400}> 
          <Pie
            dataKey="value"
            color="red"
            
            isAnimationActive={false}
            data={myData1}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          {/* <Pie dataKey="value" data={myData1} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
          <Tooltip />
        </PieChart>

        <h2 className=" text-2xl text-[#00C49F] font-bold">My Donation<span  className="text-2xl w-20 font-bold">**</span></h2>



      
  



   </div>

    
  )
}

export default Statistic

