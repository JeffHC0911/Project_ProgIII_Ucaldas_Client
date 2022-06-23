import { Card } from 'antd';

const { Meta } = Card;

export default function CardComponent(content) {
    const { children } = content;
    const {image, title, description } = children;
    return(
    <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={image} />}
    >
        <Meta title={title} description={description} />
    </Card>
    )
}