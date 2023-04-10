import { children, Component } from 'solid-js';
import { Row, Col, Container } from 'solid-bootstrap';
import styles from './TextBlock.module.scss';

interface TextBlockProps {
    title?: String,
    children?: any,
}

const TextBlock: Component<TextBlockProps> = (props: any) => {
    const c = children(() => props.children);

    return (
        <Container class={styles.TextBlock}>
            {props.title ? <Row style={{"justify-content": "center"}}>
                <Col xs="auto"><h1> {props.title} </h1></Col>
            </Row> : <></>}
            {/* <hr/> */}
            <Row class={styles.content}>
                <Col> {c()} </Col>
            </Row>
        </Container>
    );
}

export default TextBlock;