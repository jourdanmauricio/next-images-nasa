import { useRouter } from 'next/router';
import { Image as ImageType } from '@/types';
import Image from 'next/image';

type LastTenDaysImagesProps = {
  images: ImageType[];
};

const LastTenDaysImages = ({ images }: LastTenDaysImagesProps) => {
  const router = useRouter();

  return (
    <div>
      <h2>Ultimos 10 dias</h2>

      {images.map((image, index) => (
        <div key={index}>
          <Image
            onClick={() => router.push(`/image/${image.date}`)}
            src={image.url}
            alt={image.title}
            width="250"
            height="250"
            className="hover:cursor-pointer"
          />
          <h2>{image.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default LastTenDaysImages;
