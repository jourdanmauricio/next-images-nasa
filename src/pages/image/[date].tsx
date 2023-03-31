import fetcher from '@/utils/fetcher';
import { Image as ImageType } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/router';

type ImageDateProps = {
  image: ImageType;
};

type StaticPropsParams = {
  params: any;
};

const ImageDate = ({ image }: ImageDateProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <h2 className="text-center text-2xl">{image.title}</h2>
      <Image
        src={image.url}
        alt={image.title}
        width="500"
        height="500"
        className="mx-auto hover:cursor-pointer py-10"
      />
      <h3 className="py-10">{image.date}</h3>
      <p>{image.explanation}</p>
    </div>
  );
};

/*export async function getServerSideProps(ctx) {
    console.log(ctx.query.date);
    try {
        const image = await fetcher(`&date=${ctx.query.date}`);
        return {
            props: {
                image,
            },
        };
    } catch (error) {
        console.error(error);
    }
}*/

export async function getStaticProps({ params }: StaticPropsParams) {
  const { date } = params;

  try {
    const image = await fetcher(`&date=${date}`);
    return {
      props: {
        image,
      },
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default ImageDate;
