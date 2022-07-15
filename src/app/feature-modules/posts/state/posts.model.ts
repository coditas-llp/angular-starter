/* eslint-disable prettier/prettier */
export interface Post {
  id?: number;
  title: string;
  description: string;
}

export const generatePosts = (count?: number, existingNumber?: number) => {
  return new Array(count || 10).fill(0).map((r, i) => ({
    title: `post_${(existingNumber || 0) + i + 1}`,
    description: `post_describe${(existingNumber || 0) + i + 1}`,
    id: +`${(existingNumber || 0) + i + 1}`,

  } as Post));
};
