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
            type: 'text',
            title: 'Brief'
        },
        {
            type: 'array',
            name: 'artists',
            title: 'Artists',
            of: [
                {
                    name: 'artist',
                    type: 'reference',
                    title: 'Artist',
                    to: [{type: 'artist'}],
                    options: {
                        disableNew: true
                    }
                },
            ],
        },
    ]
}