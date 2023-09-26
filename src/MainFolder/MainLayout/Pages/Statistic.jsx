import { VictoryPie } from "victory"
const Statistic = () => {
  const myData = [
    { x : 'PHP' , y : 40},
    { x : 'Java' , y : 30},
    
  ];
  return (
    <div className=" absolute ml-10 top-9">
      <VictoryPie data={myData}
      colorScale={["blue", "gray"]}
      radius={100}
      
      ></VictoryPie>
    </div>
  )
}

export default Statistic