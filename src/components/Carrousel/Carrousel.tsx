import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ImageWithLink extends ReactImageGalleryItem {
    link: string;
}

interface Props {
    sizeCarrousel?: number;
}

export const Carrousel: React.FC<Props> = ({ sizeCarrousel }: Props) => {
    const images: ImageWithLink[] = [
        {
            original: `https://picsum.photos/id/1018/1920/${sizeCarrousel ?? 800}`,
            thumbnail: "https://picsum.photos/id/1018/1000/150",
            link: "https://www.youtube.com/watch?v=IQY3RJAMm8g"
        },
        {
            original: `https://picsum.photos/id/1015/1920/${sizeCarrousel ?? 800}`,
            thumbnail: "https://picsum.photos/id/1015/1000/150",
            link: "https://www.youtube.com/watch?v=IQY3RJAMm8g"
        },
        {
            original: `https://picsum.photos/id/1052/1920/${sizeCarrousel ?? 800}`,
            thumbnail: "https://picsum.photos/id/1052/1700/150",
            link: "https://www.youtube.com/watch?v=IQY3RJAMm8g"
        }
    ];

    const handleImageClick = (event: React.MouseEvent<HTMLElement>) => {
        const link = (event.currentTarget as HTMLElement).dataset.link;
        console.log("click entro", link);
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className='w-full z-0'>
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
                onClick={handleImageClick}
                renderItem={(item) => (
                    <div className="w-full h-full">
                        <img
                            src={item.original}
                            alt=""
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}
            />
        </div>
    );
};
