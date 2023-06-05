import { InputDimensions } from '../components/inputs/InputDimensions'

export const Artwork = {
    name: 'artwork',
    type: 'document',
    title: 'Artworks',
    preview: {
        select: {
            media: 'banner',
            title: 'name',
            subtitle: 'artist.name'
        }
    },
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
            name: 'width',
            type: 'number',
            title: 'Width',
            components: {input: InputDimensions},
        },
        {
            name: 'height',
            type: 'number',
            title: 'Height',
            components: {input: InputDimensions},
        },
        {
            name: 'depth',
            type: 'number',
            title: 'Depth',
            components: {input: InputDimensions},
        },
        {
            name: 'brief',
            type: 'text',
            title: 'Brief'
        },
    ]
}