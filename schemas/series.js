export const Series = {
    name: 'series',
    type: 'document',
    title: 'Series',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
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
            name: 'brief',
            type: 'text',
            title: 'Brief'
        },
    ]
}