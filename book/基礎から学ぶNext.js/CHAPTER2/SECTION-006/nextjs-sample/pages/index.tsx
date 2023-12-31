import { Client } from '@notionhq/client';
import { GetStaticProps } from 'next';




const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export type Content =
    | {
          type:
              | 'paragraph'
              | 'quote'
              | 'heading_2'
              | 'heading_3';
          text: string | null;
      }
    | {
          type: 'code';
          text: string | null;
          language: string | null;
      };

export type Post = {
    id: string;
    title: string | null;
    slug: string | null;
    createdTs: string | null;
    lastEditedTs: string | null;
    contents: Content[];
};

type StaticProps = {
    posts: Post | null;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || '',
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true
          }
        }
      ]
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      }
    ]
  });
  const page = database.results[0];
  if (!page) {
    return {
      props: {
        psot: null
      }
    };
  }
  if (!('properties' in page)) {
    return {
      props: {
        post: {
          id: page.id,
          title: null,
          slug: null,
          createdTs: null,
          lastEditedTs: null,
          contents: []
        }
      }
    };
  }
  let title: string | null = null;
  if (page.properties['Name'].type === 'title') {
    title = 
      page.properties['Name'].title[0]?.plain_next ??
      null;
  }
  let slug: string | null = null;
  if (page.properties['Slug'].type === 'rich_text') {
    slug =
      page.properties['Slug'].rich_text[0]?.plain_text ??
      null;
  }
  const blocks = await notion.blocks.children.list({
    block_id: page.id
  });
  const contents: Content[] = [];
  blocks.results.forEach((block) => {
    if (!('type' in block)) {
      return;
    }
    switch (block.type) {
      case 'paragraph':
        contents.push({
          type: 'paragraph',
          text:
            block.paragraph.rich_text[0]
              ?.plain_text ?? null
        });
        break;
      case 'heading_3':
        contents.push({
          type: 'heading_3',
          text:
            block.heading_3.rich_text[0]
              ?.plain_text ?? null
        });
        break;
      case 'quote':
        contents.push({
          type: 'quote',
          text:
            block.quote.rich_text[0]?.plain_text ??
            null
        });
        break;
      case 'code':
        contents.push({
          type: 'code',
          text:
            block.code.rich_text[0]?.plain_text ?? null,
            language: block.code.language
        });
    }
  });

  const post: Post = {
    id: page.id,
    title,
    slug,
    createdTs: page.created_time,
    lastEditedTs: page.last_edited_time,
    contents
  };


  console.dir(post, { depth: null });
  return {
    props: {post}
  };
};

const Home = () => {
  return <div></div>;
};

export default Home;