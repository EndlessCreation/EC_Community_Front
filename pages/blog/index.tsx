import BlogList from '@components/BlogList';
import MainLayout from '@components/layouts';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

const BlogListPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainLayout>
      <BlogList posts={posts} />
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
  );
  return {
    props: {
      posts,
    },
  };
};

export default BlogListPage;
