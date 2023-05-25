import { US_STATES } from '../library/index'
import { InputInstagram } from '../components/inputs/InputInstagram'

export const Venue = {
    name: 'venue',
    type: 'document',
    title: 'Venues',
    fields: [
        {
            name: 'name',
            type: 'url',
            title: 'Name'
        },
        {
            name: 'banner',
            type: 'image',
            title: 'Cover Image'
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
            name: 'address1',
            type: 'string',
            title: 'Street Address'
        },
        {
            name: 'address2',
            type: 'string',
            title: 'Street Address (cont.)'
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
            name: 'zip',
            type: 'string',
            title: 'Zip'
        }
    ]
}