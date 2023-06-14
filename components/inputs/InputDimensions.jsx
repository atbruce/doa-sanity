import { Flex, Inline, Text } from '@sanity/ui'

export function InputDimensions(props) {
    return (
        <Flex>
            <Inline space={3}>
                {props.renderDefault(props)}
                <Text size={3}>in.</Text>
            </Inline>
        </Flex>
    )
}