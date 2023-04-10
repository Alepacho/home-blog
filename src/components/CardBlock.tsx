import { children, Component, mergeProps, onMount } from 'solid-js';
import { Card, Row, Col, Container, Badge } from 'solid-bootstrap';
import { Motion } from "@motionone/solid";
import styles from './CardBlock.module.scss';

interface CardBlockProps {
    icon: String,
    title: String,
    children?: any,
    style?: string
}

const CardBlock: Component<CardBlockProps> = (props: any) => {
    const merged = mergeProps({
        icon:  "",
		title: "",
        style: "",
	}, props);
    const c = children(() => props.children);

    onMount(async () => {
        // console.log("card mount")
    });

    return (
        <Container>
            <Motion.div
                // animate={{ opacity: [0, 1] }}
                // transition={{ duration: 0.5 }}
            >
            <Card bg="dark" text="white" class={styles.CardBlock} style={merged.style}>
                {/* {merged.icon !== undefined ? <Card.Header class={styles.header}>  </Card.Header> : <></>} */}
                <Card.Body class={styles.body}>
                    <Card.Title class={styles.title}>
                        <Row>
                            <Col class="m-auto"> {merged.title} </Col>
                            <Col xs="auto" class={styles.icon}> {merged.icon} </Col>
                        </Row>
                        
                    </Card.Title>
                    <Card.Text class={styles.content}> {c()} </Card.Text>
                </Card.Body>
            </Card>
            </Motion.div>
        </Container>
        
    );
}

export default CardBlock;