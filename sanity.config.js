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
import { CodeBlockIcon, DatabaseIcon } from '@sanity/icons'

export default defineConfig([
    {
        name: 'development',
        title: 'Development',
        subtitle: 'Sample data',
        projectId: '43rwpnpr',
        basePath: '/development',
        dataset: 'development',
        icon: CodeBlockIcon,
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
    },
    {
        name: 'production',
        title: 'Production',
        subtitle: 'Live site data',
        projectId: '43rwpnpr',
        basePath: '/production',
        dataset: 'production',
        icon: DatabaseIcon,
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
    }
])
