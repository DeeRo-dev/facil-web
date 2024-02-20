import ImageGallery from 'react-image-gallery' 
import "react-image-gallery/styles/css/image-gallery.css";


// https://www.npmjs.com/package/react-image-gallery
export const Carrousel = () => {

    const images = [
        {
        original:"https://picsum.photos/id/1018/1700/600",
        thumbnail: "https://picsum.photos/id/1018/1000/150"
    },
    {
        original:"https://picsum.photos/id/1015/1700/600",
        thumbnail: "https://picsum.photos/id/1015/1000/150"
    },
    {
        original:"https://picsum.photos/id/1052/1700/600",
        thumbnail: "https://picsum.photos/id/1052/1700/150"
    },
]
  return (
    <div className='w-full'>

        <ImageGallery 
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={3000}
        slideDuration={1000}
        />

    </div>
  )
}
