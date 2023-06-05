export const Series = {
    name: 'series',
    type: 'document',
    title: 'Series',
    preview: {
        select: {
            media: 'banner',
            title: 'name',
            subtitle: 'artist.name'
        }
    },
    groups: [
        {
            name: 'artworks',
            title: 'Artworks',
        },
    ],
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
            type: 'array',
            title: 'Brief',
            of: [{type: 'block'}]
        },
        /*
        {
            title: 'Artworks',
            name: 'atrworksReference',
            type: 'crossDatasetReference',
            dataset: 'production',
            group:'artworks',
            to: [
                {
                    type: 'artwork',
                    preview: {
                        select: {
                            title: 'name',
                            media: 'image',
                        },
                    },
                },
            ],
            options: {
                filter: ({document}) => {
                // Always make sure to check for document properties
                // before attempting to use them/
                    return {
                        filter: 'series == $ref',
                        params: {
                            series: document.ref,
                        }
                    }
                }
            }
        }
        */
    ]
}