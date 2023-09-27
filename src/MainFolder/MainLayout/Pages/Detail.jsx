/* eslint-disable react/prop-types */
import './Pages.css'

import swal from "sweetalert";

const Detail = ({detail}) => {
    const {id,image, title, price, description} = detail;

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
    <div className=' md:w-max-[1200px] mx-auto'>
        <div className='bg-image'>
        <img className="md:w-[1200px]  mx-auto" src={image} alt="img" />
        </div>
        <div className="bg-back  ">
        <button onClick={handleAddToDonate} className="bg-[red] text-white font-bold rounded-md mt-3 py-2 px-3">Donate $ {price}</button>
        </div>
        <div className=" md:hidden lg:hidden">
        <button onClick={handleAddToDonate} className="bg-[red] text-white font-bold rounded-md mt-3 py-2 px-3">Donate $ {price}</button>
        </div>
       
       <div className=' md:w-[1200px] mx-auto'>
       <h2 className="text-3xl font-bold md:mt-4 md:mb-3">{title}</h2>
        <h2 className='md:mt-3 md:mb-8 w-[500px] md:w-full  text-xl'>{description}</h2>
        </div> 

    </div>
  )
}

export default Detail