import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'markdown',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    createdAt: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: { type: 'list', required: true, of: { type: 'string' } },
    author: { type: 'json', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'data/post',
  documentTypes: [Post],
});
