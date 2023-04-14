export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'book',
          title: 'Book',
          type: 'string',
      },
      {
          name: 'author',
          title: 'Author',
          type: 'string',
      },
      {
          name: 'details',
          title: 'Details',
          type: 'string',
      },
      {
          name: 'link',
          title: 'Book Slug Name',
          type: 'string',
      }
  ]
  };