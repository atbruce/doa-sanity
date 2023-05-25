import { PreviewReferenceImg } from '../components/previews/index'

export const Installation = {
    name: 'installation',
    type: 'document',
    title: 'Installations',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Venue Name'
        },
        {
            name: 'website',
            type: 'url',
            title: 'Venue Website'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location'
        },
        {
            name: 'banner',
            type: 'image',
            title: 'Cover Image'
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
                    type: 'object',
                    name: 'collaborator',
                    title: 'Collaborator',
                    components: {
                        preview: PreviewReferenceImg,
                    }, 
                    fields: [
                        {
                            name: 'artist',
                            type: 'reference',
                            title: 'Artist',
                            to: [{type: 'artist'}]
                        },
                    ],
                },
            ],
        },
    ]
}