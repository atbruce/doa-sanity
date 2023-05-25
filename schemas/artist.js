import { US_STATES } from '../library/index'

export const Artist = {
    name: 'artist',
    type: 'document',
    title: 'Atrists',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'avatar',
            type: 'image',
            title: 'Profile Image'
        },
        {
            name: 'city',
            type: 'string',
            title: 'City'
        },
        {
            name: 'state',
            type: 'string',
            title: 'State',
            options: {
                list: US_STATES
            }
        },
        {
            name: 'instagram',
            type: 'string',
            title: 'Instagram'
        },
        {
            name: 'website',
            type: 'url',
            title: 'Website'
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio'
        },
        {
            name: 'signature',
            type: 'image',
            title: 'Signature'
        },
    ]
}