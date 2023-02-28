export interface ApiPhotoResource {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export async function getPhoto(photoId: number): Promise<ApiPhotoResource> {
  return await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then((data: ApiPhotoResource) => {
      console.log('Success:', data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}
