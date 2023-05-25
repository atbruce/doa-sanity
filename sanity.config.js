import { defineConfig } from 'sanity'
import {
    dashboardTool,
    sanityTutorialsWidget,
    projectUsersWidget,
    projectInfoWidget
} from '@sanity/dashboard'
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list"
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'dept-of-art',
    projectId: '43rwpnpr',
    dataset: 'production',
    plugins: [
        dashboardTool({
            widgets: [
                documentListWidget({
                    title: 'Artists | Recently added',
                    showCreateButton: true,
                    limit: 5,
                    types: ["artist"],
                }),
                // projectInfoWidget(),
                projectUsersWidget()
            ]
        }),
        deskTool(),
        media(),
        visionTool()
    ],
    schema: {
        types: schemaTypes,
    },
})
