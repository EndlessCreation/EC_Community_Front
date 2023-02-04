import Blog from '@components/Blog';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

const BlogPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Blog post={post!} />;
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default BlogPage;
