// schemas/member.js
export default {
    name: 'member',
    title: 'Medlem',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Navn',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'email',
        title: 'E-post',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Bilde',
        type: 'image'
      },
      {
        name: 'logEntries',
        title: 'Loggføringer',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'logEntry' }] }]
      }
    ]
  };
  