import { Row, Col, Button, Container, ButtonGroup, Stack } from "solid-bootstrap";
import { Component, onMount, createSignal, Show } from "solid-js";
import { useStoreon } from '@storeon/solidjs';
import { State, Events, store } from '../../../store';

import styles from './style.module.scss';

interface IconProps {
    width?: string | number,
    height?: string | number,
    src?: string
}

export const Icon: Component<IconProps> = (props) => {
    const [state, dispatch] = useStoreon<State, Events>();
    const [theme, setTheme] = createSignal(state.page.theme);

    store.on('page/set/theme', () => {
		setTheme(state.page.theme == "dark" ? "white" : "dark");
	})

    return <div>
        <img 
            class={theme() == "dark" ? styles.dark : styles.white}
            draggable={false} 
            width={props.width} 
            height={props.height} 
            src={props.src}
        />
    </div>
}