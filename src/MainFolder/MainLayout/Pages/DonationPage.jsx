import { useEffect, useState } from "react"
import DonationCard from "./DonationCard";


const DonationPage = () => {
  const [donation,setDonation] = useState([]);
  const [noFound, setNoFound] = useState('');
  const [isShow, setIsShow] = useState(false);

  useEffect(()=>{
    const donation = JSON.parse(localStorage.getItem('donation'));
    if(donation){
      setDonation(donation)


    } else{
      setNoFound("No Data Available Now")
    }

  }, [])

  const handleRemove = ()=> {
    localStorage.clear()
    setDonation([])
    setNoFound("No Data Available Now")

  }
  return (
    <div className=" mt-20 ">
      { noFound ? <p className="flex justify-center items-center mt-10">{noFound}</p>
      :
    <div>
        
          
        
      
      <div className=" grid grid-cols-1 md:grid-cols-2">
       
        {
          isShow ? donation.map(card => <DonationCard key={card.id} card={card}></DonationCard> )
          : 
          donation.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard> )
        }
      </div>
    
      
      <div className=" text-center">
        <button className=" p-5 bg-sky-900 text-white rounded-lg font-bold m-5" onClick={()=>setIsShow(!isShow)}>
          {isShow ? "See Less" : "See More"}
        </button>
        {
            donation.length > 0 && <button className="p-5 rounded-lg bg-sky-900 text-white font-bold m-5" onClick={handleRemove}>Delete All Donation Data</button>
          }

      </div>
    </div> 
 } </div>
    
  )
}

export default DonationPage