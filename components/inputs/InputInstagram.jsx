import { Flex, Inline, Text } from '@sanity/ui'

export function InputInstagram(props) {
    return (
        <Flex style={{width: '100%'}}>
            <Inline space={3}>
                <Text size={3}>@</Text>
                {props.renderDefault(props)}
            </Inline>
        </Flex>
    )
}