import type { Component } from 'solid-js';

import { Alert, Row, Col } from 'solid-bootstrap';

import styles from './CautionSign.module.scss';

// style={{"font-size": "16px"}}

const CautionSign: Component = () => {
    return (
        <Alert class={styles.sign}>
            <Row>
                {/* <Col xs="auto"> ⚠️ </Col> */}
                <Col class={styles.title}> Внимание! </Col>
            </Row>
            <Row>
                <Col> Сайт находится в разработке! 🚧 </Col>
            </Row>
            
            
        </Alert>
    );
}

export default CautionSign;