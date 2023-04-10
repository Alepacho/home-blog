import { Component, mergeProps } from 'solid-js';
import { Card, Row, Col, Form, Button, Container } from 'solid-bootstrap';
import styles from './CardContact.module.scss';

const CardContact: Component = (props: any) => {
    const onSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        console.log("submit");
    }
    return <Container class="p-0">
        <Card bg="dark" text="white" class={styles.CardContact}>
            <Card.Body class={styles.body}>
                <Form noValidate onSubmit={onSubmit}>
                    <Form.Group class="mb-3" controlId="formName">
                        <Form.Label class={styles.label}> Ваше имя:</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>

                    <Form.Group class="mb-3" controlId="formEmail">
                        <Form.Label class={styles.label}>Email адрес:</Form.Label>
                        <Form.Control type="email"required />
                    </Form.Group>

                    <Form.Group class="mb-3" controlId="formMessage">
                        {/* <Form.Label class={styles.label}>Message:</Form.Label> */}
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>

                    <Button variant="outline-primary" type="submit" class={styles.submit}> Отправить </Button>
                </Form>
            </Card.Body>
        </Card>
    </Container> 
}

export default CardContact;