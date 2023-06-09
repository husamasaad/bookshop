export default {

  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
    name: 'image',
    title: 'Image',
    type: 'array',
    of: [{type : 'image'}],
    options: { hotspot: true }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'cat',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    }
  ]
}