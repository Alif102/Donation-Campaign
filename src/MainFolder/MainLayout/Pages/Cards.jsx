/* eslint-disable react/prop-types */
import axios from "axios";
import Card from "./Card"
import { useEffect, useState } from "react";


const Cards = () => {

    const [records, setRecords] = useState([])
   const [search, setSearch] = useState([]);

   const loaderData = async () => {
    axios.get('http://localhost:3000/posts')
    .then(res=> setSearch(res.data))
    .catch(error => console.log(error)
      )
   }

   useEffect( ()=> {
    loaderData();
   }, [])

  const searchRecords = ()=> {

    axios.get(`http://localhost:3000/posts/?category=${records}`)
    .then(res => {
      setSearch(res.data)
    })
  }


  return (
    <div> 
      

      {/* Banner compo */}

      <div>
           
          <div className="opacity-20 "> 
          <img className=" w-full" src='/Resources/bgg.jpg' />
          </div>

            
            <div className=" container text-center mx-auto my-[-40%]   md:space-y-5 absolute">
                <h2 className="text-center text-3xl font-bold mb-5 mt-16">I Grow By Helping People In Need</h2>
                <div className=" container text-center mx-auto my-[10%]   md:space-y-5 absolute">



          <input className="border-solid border-2 border-gray-400  p-3 rounded-md " 
        type="text"
        placeholder="Enter Category"

        onChange={e => setRecords(e.target.value)}
        
      
          // onChange={(e) => setRecords(e.target.value)}
        
      />
      <button 
       onClick={searchRecords}
       className="button rounded-md btn bg-[red] text-white p-3">Search</button>

      

 

                    </div>

                


            </div>
            
      
            

        </div>









      {/* cards compo */}


    <div className=" max-w-[1200px] mx-auto mt-5 ">


        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-md mt-8 mb-12 gap-5">
           
            
                    {
                   search.map((card) => 
                    <Card key={card.id} card={card} ></Card>) 
                   }
            
        </div> 
        </div>
    </div>
  )
                  }

export default Cards