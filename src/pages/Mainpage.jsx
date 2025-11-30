import React,{useState} from 'react'
import Banner from '../Banner'
import Collection from '../Collection'
import Header from '../Header'
import Footer from '../Footer'
import { Gents ,Ladies} from '../../../data'
import WomenCollection from '../WomenCollection'



const Mainpage = () => {
  console.log(Gents);
  const[images,Setimages]=useState(Gents)
  const[womenimages,Setwomenimages]=useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collection images={images}/>
      <WomenCollection womenimages={womenimages}/>
      <Footer/>

      
      
    </div>
  )
}

export default Mainpage