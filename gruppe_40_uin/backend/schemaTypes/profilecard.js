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
                maxLength: 200,
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            }
        },

        {
            name: 'log',
            type: 'array',
            title: 'Loggføring',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'date', type: 'date', title: 'Dato' },
                        { name: 'entry', type: 'string', title: 'Beskrivelse' },
                        { name: 'time', type: 'number', title: 'Timer brukt' },
                    ],
                },
            ],
        }
    ]
}