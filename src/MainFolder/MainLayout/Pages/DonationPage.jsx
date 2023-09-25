import { useEffect, useState } from "react"
import DonationCard from "./DonationCard";

const DonationPage = () => {
  const [donation,setDonation] = useState([]);
  const [noFound, setNoFound] = useState('');

  useEffect(()=>{
    const donation = JSON.parse(localStorage.getItem('donation'));
    if(donation){
      setDonation(donation)


    } else{
      setNoFound("no data")
    }

  }, [])
  return (
    <div className=" mt-20 ">
      { noFound ? <p>{noFound}</p>
      :
      <div className=" grid grid-cols-1 md:grid-cols-2">
        {
          donation.map(card => <DonationCard key={card.id} card={card}></DonationCard> )
        }
      </div>
      } 
      <div>

      </div>
    </div>
  )
}

export default DonationPage