import { IPost } from './types';

// Implementation code where T is the returned data shape
export const apiInstance = {
  get: async <T>(url: string, delay = 1000): Promise<T> => {
    const [response] = await Promise.all([
      fetch(url, {
        headers: {
          'app-id': import.meta.env.PUBLIC_APP_ID,
        },
      }),
      new Promise((res) => setTimeout(res, delay)),
    ]);
    return response.json();
  },
};

export const getPosts = ({ limit = 20, page = 0 } = {}) => {
  return apiInstance.get<{
    data: Array<IPost>;
    limit: number;
    page: number;
    total: number;
  }>(`https://dummyapi.io/data/v1/post?limit=${limit}&page=${page}`);
};

export const getPostDataById = (id: string) =>
  apiInstance.get<IPost>(`https://dummyapi.io/data/v1/post/${id}`);

export const postIds = [
  '60d21b4667d0d8992e610c85',
  '60d21b4967d0d8992e610c90',
  '60d21b8667d0d8992e610d3f',
  '60d21b3a67d0d8992e610c60',
  '60d21bf967d0d8992e610e9b',
  '60d21b7d67d0d8992e610d25',
  '60d21bd767d0d8992e610e31',
  '60d21baa67d0d8992e610da7',
  '60d21af967d0d8992e610ba1',
  '60d21aeb67d0d8992e610b79',
  '60d21bad67d0d8992e610daf',
  '60d21bee67d0d8992e610e79',
  '60d21bd267d0d8992e610e21',
  '60d21b1a67d0d8992e610c05',
  '60d21be267d0d8992e610e52',
  '60d21b3667d0d8992e610c56',
  '60d21b0767d0d8992e610bcf',
  '60d21afd67d0d8992e610bad',
  '60d21b0467d0d8992e610bc5',
  '60d21bf367d0d8992e610e88',
];
