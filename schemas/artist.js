import { US_STATES } from '../library/index'
import { InputInstagram } from '../components/inputs/InputInstagram'

export const Artist = {
    name: 'artist',
    type: 'document',
    title: 'Artists',
    preview: {
        select: {
            media: 'avatar',
            title: 'name',
            subtitle: 'city'
        }
    },
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
            name: 'instagram',
            type: 'string',
            title: 'Instagram',
            components: {input: InputInstagram},
        },
        {
            name: 'website',
            type: 'url',
            title: 'Website'
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
            name: 'bio',
            type: 'array',
            title: 'Bio',
            of: [{type: 'block'}]
        },
        {
            name: 'signature',
            type: 'image',
            title: 'Signature'
        },
    ]
}