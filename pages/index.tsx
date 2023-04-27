import {FC} from 'react'
import { Inter } from "next/font/google";
import request, {TGenres} from '../utils/request';

import Header from "../component/header/header";
import Navbar from '../component/navabr/navbar' 
import GalleryItem from '../component/gallery-item/gallery-item'

const inter = Inter({ subsets: ["latin"] });

type HomeProps={
    results:[]
}
const  Home:FC<HomeProps> =({results})=> {
  return (
    <main>
      <Header />
      <Navbar />
      <GalleryItem results={results}/>
    </main>
  );
}

export default Home;



export  const getServerSideProps = async(context:any )=>{
 try {
  const genre = context.query.genre as TGenres;
  
  const endpoint = request[genre]?.url || request.trending.url;

  const response = await fetch(`https://api.themoviedb.org/3${endpoint}`)
   const res =  await response.json()
            
   return{
    props:{
      results: res.results
    }
   }
 }
  catch(error){
    console.log(error)
    return{
      props:{
        results:[],
      }
     }
  }
}