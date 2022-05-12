import { Result, Button } from 'antd';

export default function NotFound() {
    return(
    <Result
        status="404"
        title="404"
        subTitle="Lo siento, esta página no existe."
        extra={<Button type="primary">Regresar</Button>}
    />
    )
}