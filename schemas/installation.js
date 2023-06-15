import { PreviewReferenceImg } from '../components/previews/index'

export const Installation = {
    name: 'installation',
    type: 'document',
    title: 'Installations',
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
            name: 'date_start',
            type: 'date',
            title: 'Start Date',
        },
        {
            name: 'date_end',
            type: 'date',
            title: 'End Date'
        },
        {
            name: 'venue',
            type: 'reference',
            title: 'Venue',
            to: [{type: 'venue'}],
            options: {
                disableNew: true
            }
        },
        {
            name: 'brief',
            type: 'array',
            title: 'Brief',
            of: [{type: 'block'}]
        },
        {
            type: 'array',
            name: 'artworks',
            title: 'Artworks',
            of: [
                {
                    name: 'artwork',
                    type: 'reference',
                    title: 'Artwork',
                    to: [{type: 'artwork'}],
                    options: {
                        disableNew: true
                    }
                },
            ],
        },
    ]
}