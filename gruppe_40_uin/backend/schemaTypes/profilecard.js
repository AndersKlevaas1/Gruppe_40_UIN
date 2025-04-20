export const profilecard = {
    name: 'profilecard',
    title: 'Profilecard',
    type: 'document',
    fields: [
        {
            name: 'image',
            type: 'image',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'email',
            type: 'string',
        },
        {
            name: 'profilecardslug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            }
        },
    ]
}