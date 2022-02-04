import axios from 'axios';

export const uploadImage = async (data: FormData) => {
  const response = await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/images/upload`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
  return response;
};
