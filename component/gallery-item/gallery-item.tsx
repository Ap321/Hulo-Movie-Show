import { FC } from 'react'
import Thumbnail from '../thumbnail/thumbnail';
import FlipMove from 'react-flip-move';

type GalleryItemProps={
    results:any;
    
}

const GalleryItem:FC<GalleryItemProps> = ({results}) => {
 
  return (
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((result:any)=>(
         <Thumbnail key={result.id} result={result} />
        ))}
        </FlipMove>
  )
}

export default GalleryItem;