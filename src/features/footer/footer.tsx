import { Component, createSignal } from 'solid-js';
import { A, useLocation } from "@solidjs/router";
import { Row, Col, Container, Button, Stack } from 'solid-bootstrap';
import { createStore, produce } from "solid-js/store";
import { State, Events, store } from '../../store';
import { useStoreon } from '@storeon/solidjs';

import { Icon } from '../../components';

import styles from './style.module.scss';

import IconUp from '../../assets/up.svg';
import IconTheme from '../../assets/theme.svg';

import IconLinkedin from '../../assets/icons/media/linkedin.svg';
import IconTwitter from '../../assets/icons/media/twitter.svg';
import IconTelegram from '../../assets/icons/media/telegram.svg';
import IconInstagram from '../../assets/icons/media/instagram.svg';


export const Footer: Component = () => {
	const [state, dispatch] = useStoreon<State, Events>();

	const onClickGoTop = () => {
		window.scrollTo(0, 0);
	}

	const onClickChangeTheme = () => {
		let theme = state.page.theme;
		if (theme == "dark") theme = "white"; else theme = "dark";
		dispatch('page/set/theme', theme);
	}

	return (
		<footer class={styles.Footer}>
			<Container fluid class={styles.container}>
				<Stack>
					<div>
						<Row>
							<Col xs="auto">
								<Button class={styles.buttonUp} onClick={onClickChangeTheme}>
									<Icon width={24} src={IconTheme}/>
								</Button> 
							</Col>
							<Col> Copyright © 2022 Home Blog. </Col>
							<Col xs="auto"> 
								<Button class={styles.buttonUp} onClick={onClickGoTop}> 
									<Icon width={24} src={IconUp}/>
								</Button> 
							</Col>
						</Row>
					</div>
					{/* <hr class="my-3"/> style="text-align: left;" */}
					<div class="mt-1">
						<Row>
							{/* <Col xs="auto" class="p-0"> Подписывайтесь на нас в соц. сетях: </Col> */}
							{/* <Col> contact@home-blog.ru </Col> */}
							<Col></Col>
							<Col xs="auto" class="p-0"> <Icon width={24} src={IconLinkedin}/> </Col>
							<Col xs="auto" class="p-0"> <Icon width={24} src={IconTwitter}/> </Col>
							<Col xs="auto" class="p-0"> <Icon width={24} src={IconInstagram}/> </Col>
							<Col xs="auto" class="p-0"> <Icon width={24} src={IconTelegram}/> </Col>
							<Col></Col>
						</Row>
					</div>
					{/* <div style="height: 64px;"></div> */}
					{/* <div class={styles.smallText}> Вся информация, представленная на сайте, носит информационный 
					характер и ни при каких условиях не является публичной офертой, 
					определяемой положениями Статьи 437(2) Гражданского кодекса РФ. 
					Оставаясь на сайте Вы соглашаетесь с условиями «Пользовательского соглашения» 
					</div> */}
				</Stack>
			</Container>
		</footer>
	);
};
