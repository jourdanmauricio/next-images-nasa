import { useRouter } from 'next/router';
import { Image as ImageType } from '@/types';
import Image from 'next/image';

const ImageOfTheDay = ({ url, title, date }: ImageType) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full">
        <Image
          src={url}
          alt={title}
          onClick={() => router.push(`/image/${date}`)}
          width="500"
          height="500"
          className="mx-auto hover:cursor-pointer"
        />
      </div>
      <h2 className="text-center text-2xl">{title}</h2>
    </>
  );
};

export default ImageOfTheDay;
