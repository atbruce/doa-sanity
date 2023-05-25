import { Avatar, Card, Inline } from '@sanity/ui'

export function PreviewReferenceImg(props){
    return (
        <Card padding={4}
              style={{lineHeight: 0, textAlign: 'center'}}
              >
            <Inline>
                <Avatar size={2} />
            </Inline>
        </Card>
    )
}
/*
<Card
  padding={4}
  style={{lineHeight: 0, textAlign: 'center'}}
>
  <Inline space={3}>
    <Avatar size={0} />
    <Avatar size={1} />
    <Avatar size={2} />
  </Inline>
</Card>

<div style={{border: '1px solid green'}}>
      {props.renderDefault(props)}
</div>
*/