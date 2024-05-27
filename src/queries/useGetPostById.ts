import { getPostById } from '../api';
import { useQuery } from '@tanstack/react-query';

const useGetPostById = (postId: string) => {
  const fetcher = async () => {
    const { data } = await getPostById(postId);
    return data;
  };

  return useQuery({
    queryKey: ['getPostListById', postId],
    queryFn: fetcher,
    enabled: !!postId, // 포스트 아이디가 없으면 실행하지 않겠어
  });
};

export default useGetPostById;
