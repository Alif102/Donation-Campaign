/* eslint-disable react/prop-types */

import swal from "sweetalert";

const Detail = ({detail}) => {
    const {id,image, title, price} = detail;

    const handleAddToDonate = ()=>{
      const donationArray = [];
      const donation = JSON.parse(localStorage.getItem('donation'));
      if(!donation){
        donationArray.push(detail)
        localStorage.setItem('donation', JSON.stringify(donationArray))
        swal("Good Job", "Add Successfully", "success")
      }
      else{
        const isExist = donation.find(item => item.id === id)
        if(!isExist){
          donationArray.push(...donation, detail);
        localStorage.setItem('donation', JSON.stringify(donationArray))
        swal("Good Job", "Add Successfully", "success")

        }else{
          swal("Error", "Already added", "error")
        }
        
      }
    }
  return (
    <div>
        <img src={image} alt="img" />
        <button onClick={handleAddToDonate} className="bg-[red] text-white font-bold rounded-md mt-3 py-2 px-3">Donate $ {price}</button>
        <h2 className="text-3xl font-bold mt-4 mb-3">{title}</h2>

    </div>
  )
}

export default Detail