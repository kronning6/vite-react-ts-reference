import { useQuery } from '@tanstack/react-query';
import { getPhoto } from '../services/photosApi';

export default function JSONPlaceholderPhoto(props: { photoId: number }) {
  const photoId = props.photoId;
  const { isLoading, error, data } = useQuery({
    queryKey: [`photo/${photoId}`],
    queryFn: () => getPhoto(photoId),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <div className="mt-5">
      <img src={data?.url} alt="Placeholder" />
    </div>
  );
}
