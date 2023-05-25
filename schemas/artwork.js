export const Artwork = {
    name: 'artwork',
    type: 'document',
    title: 'Artworks',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'created',
            type: 'date',
            title: 'Created',
            options: {
                dateFormat: 'YYYY'
            }
        },
        {
            name: 'banner',
            type: 'image',
            title: 'Cover Image'
        },
        {
            name: 'artist',
            type: 'reference',
            title: 'Artist',
            to: [{type: 'artist'}]
        },
        {
            name: 'series',
            type: 'reference',
            title: 'Series',
            to: [{type: 'series'}]
        },
        {
            name: 'brief',
            type: 'text',
            title: 'Brief'
        },
    ]
}