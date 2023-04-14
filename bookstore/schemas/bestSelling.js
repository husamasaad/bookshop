export default {
  name: 'bestSelling',
  title: 'Best-Selling',
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
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
          name: 'link',
          title: 'Book Slug Name',
          type: 'string',
      }
  ]
  };