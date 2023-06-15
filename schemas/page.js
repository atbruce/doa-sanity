export const Page = {
    name: 'page',
    type: 'document',
    title: 'Pages',
    preview: {
        select: {
            media: 'banner',
            title: 'name',
            subtitle: 'route'
        }
    },
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: 'Internal name for CMS reference only.'
        },
        {
            name: 'route',
            type: 'string',
            title: 'Route',
            description: 'Path of the target page. IE - For www.deptofart.com/contact-us, value would be "contact-us".'
        },
        {
            name: 'headline',
            type: 'string',
            title: 'Headline',
        },
        {
            name: 'subheadline',
            type: 'string',
            title: 'Sub-Headline'
        },
        {
            name: 'banner',
            type: 'image',
            title: 'Cover Image'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type: 'block'}]
        },
    ]
}