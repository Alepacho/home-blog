import { Row, Col, Button, Container, ButtonGroup, Stack } from "solid-bootstrap";
import { Component, onMount, createSignal, Show } from "solid-js";
import { Motion } from "@motionone/solid";

import styles from './style.module.scss';
import CloseImage from '../../../assets/close.svg';
import { Icon } from '../../ui';

interface CookieProps {
    onClose?: any,
    onConfirm?: any
}

export const Cookie: Component<CookieProps> = (props) => {
    const [show, setShow] = createSignal(false);
    const [closed, setClosed] = createSignal(false);
    const [confirmed, setConfirmed] = createSignal(false);

    

    onMount(async () => {
        setTimeout(() => {
            // console.log("timeout")
            setShow(true);
        }, 2000);
    });

    const onClose = () => {
        if (props.onClose) props.onClose();
        setClosed(true);
    }

    const onConfirm = () => {
        setConfirmed(true);
        setClosed(true);
    }

    return <Show when={show()}>
        <Motion.div
            animate={{ opacity: closed() ? [1, 0] : [0, 1] }}
            transition={{ duration: 0.5 }}
            class={styles.block}
            onMotionComplete={() => {
                if (closed()) setShow(false);
                if (confirmed()) {
                    if (props.onConfirm) props.onConfirm();
                }
            }}
        > 
            <Container class={styles.content}> 
                <Stack gap={3}>
                    <div>
                    <Stack direction="horizontal" class="d-flex" gap={2}>
                        <div class={styles.title}> <h5> Мы используем Cookie файлы </h5> </div>
                        <div class="ms-auto">
                            <Button onClick={onClose} class={styles.buttonClose}>
                                <Icon width={24} src={CloseImage}/>
                            </Button>
                        </div>
                    </Stack>
                    </div>
                    <div class={styles.message}> Наш сайт использует Cookie файлы для хранения данных. 
                    Продолжая использовать сайт, вы даете согласие на работу с этими файлами. 
                    </div>
                    <div class="mt-3"> <Button class={styles.buttonConfirm} onClick={onConfirm}> Принять и закрыть </Button> </div>
                </Stack>
            </Container> 
        </Motion.div>
    </Show>
}
