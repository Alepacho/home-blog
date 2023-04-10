import Link from '../../components/Link';
import { Row, Col, Container } from 'solid-bootstrap';
import { Component, createSignal } from 'solid-js';

import styles from './style.module.scss';

export const NotFound: Component = () => {
    const phrases = [
        "Не найдено такой страницы.",
        "Быть может, ты избранный?",
        "404, просто 404.",
        "Ваша дорога приключений завела вас куда-то не туда.",
        "Проснись, Нео."
    ]
    const [phrase] = createSignal(phrases[Math.floor(Math.random()*phrases.length)]);
    
    return <Container class={styles.NotFound}>
        <Row> <Col> <h1 class="text-center"> {phrase()} </h1> </Col> </Row>
        <Row> <Col> <Link href="/"> Вернуться на главную </Link> </Col> </Row>
    </Container>
}