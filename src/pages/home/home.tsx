import { Component, createMemo, createSignal, Show } from 'solid-js';
import { onMount, onCleanup, lazy } from 'solid-js';
import { A } from "@solidjs/router";
import CautionSign from '../../components/CautionSign';

import { Row, Col, Container, Badge } from 'solid-bootstrap';
import CardContact from '../../components/CardContact';


import styles from './style.module.scss';
import Logo from '../../assets/logo2.svg';


import { useStoreon } from '@storeon/solidjs';
import { State, Events, store } from '../../store';

const Link      = lazy(() => import('../../components/Link'));
const CardBlock = lazy(() => import('../../components/CardBlock'));
const TextBlock = lazy(() => import('../../components/TextBlock'));

export const Home: Component = () => {
    // console.log("Home Redraw")
    const [state, dispatch] = useStoreon<State, Events>();
    const [showLogo, setShowLogo] = createSignal(true);
	const [theme, setTheme] = createSignal(state.page.theme);
    // onCleanup(async () => {
    //     console.log("home cleanup");
    // });

    store.on('page/set/theme', () => {
		setTheme(state.page.theme);
	})

	return (
		<Container class="p-0">
            
            {/* <CautionSign /> */}

            {/* <Row>
				<Col> Добро пожаловать на мою персональную страничку! </Col>
			</Row> */}

            <TextBlock>
                <Row>
                    <Col xs={{order: 2}} md={{order: 1}}>
                        <Row> <h1 style={{"justify-content": "center", "display": "flex"}} > Что такое Home Blog? </h1></Row>
                        <hr style="margin: 5px 0;"/>
                        <Row>
                            <Col>
                                <p> Home Blog – Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </p>
                            </Col> 
                        </Row>
                    </Col>
                    <Col xs={{order: 1}} class={styles.logo} md="auto">
                        <img draggable={false} class={
                            theme() !== "dark" ? (showLogo() ? (styles.logoImageAlwaysWhite) : styles.logoImageWhite)
                            : (showLogo() ? (styles.logoImageAlways) : styles.logoImage)
                            // (showLogo() ? (styles.logoImageAlwaysWhite) : styles.logoImageWhite)
                        } onClick={() => {
                            setShowLogo(!showLogo());
                            // localStorage.removeItem("using_cookie");
                        }} src={Logo}/>
                    </Col>
                </Row>
            </TextBlock>
            <br/>

            <Container class="p-0">
                <Row style={{"justify-content": "center"}}>
                    <Col xs="auto"><h1> Чем занимаемся? </h1></Col>
                </Row>
                <Row xs={1} style={{"justify-content": "center"}}>
                    <Col class="p-0 m-3">
                        <TextBlock>
                            <Row>
                                <Col>
                                    <Row> <h3 class="text-center"> Web </h3></Row>
                                    <hr class="m-0 mb-1"/>
                                    <Row>
                                        <Col>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    
                                        </Col> 
                                    </Row>
                                </Col>
                            </Row>
                        </TextBlock>
                    </Col>
                    <Col class="p-0 m-3">
                        <TextBlock>
                            <Row>
                                <Col>
                                    <Row> <h3 class="text-center"> Desktop </h3></Row>
                                    <hr class="m-0 mb-1"/>
                                    <Row>
                                        <Col>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    
                                        </Col> 
                                    </Row>
                                </Col>
                            </Row>
                        </TextBlock>
                    </Col>
                    <Col class="p-0 m-3">
                        <TextBlock>
                            <Row>
                                <Col>
                                    <Row> <h3 class="text-center"> UX/UI </h3></Row>
                                    <hr class="m-0 mb-1"/>
                                    <Row>
                                        <Col>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    
                                        </Col> 
                                    </Row>
                                </Col>
                            </Row>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>

            <br/>
            <Container class="p-0">
                <Row style={{"justify-content": "center"}}>
                    <Col xs="auto"><h1> Проекты </h1></Col>
                </Row>
                <br/>
                {/* <hr/> */}
                <Row xs={1} md={2} class="g-4" style={{"justify-content": "center"}}>
                    <Col xs="auto">
                        <CardBlock style="width: 300px" title="Build" icon="⚙️">
                            <Row>
                                <Row style="height: 125px; flex-direction: column;" class="pr-0">
                                    <Row class="pr-0">
                                        {/* <Col xs="auto" style="padding-right: 0;"> <Badge pill bg="primary">C</Badge> </Col> */}
                                        <Col xs="auto" class="pr-0 mb-1">
                                            <Badge pill bg="primary" class="mr-1"> Software </Badge>
                                            <Badge pill bg="primary">C/C++</Badge>
                                        </Col>
                                    </Row>
                                    <Row class="pr-0">
                                        <Col class="pr-0"> Автоматизации сборки на основе JSON конфигов. </Col>
                                    </Row>
                                </Row>
                                <hr class="my-2"/>
                                <Row> <Col xs="auto"> <Link href="/project/build"> Подробнее </Link> </Col> </Row>
                            </Row>
                        </CardBlock>
                    </Col>
                    <Col xs="auto"> 
                        <CardBlock style="width: 300px" title="Kai" icon="📘">
                            <Row>
                                <Row style="height: 125px; flex-direction: column;" class="pr-0"> 
                                    <Row class="pr-0"> 
                                        <Col xs="auto" class="pr-0 mb-1">
                                            <Badge pill bg="primary" class="mr-1"> Software </Badge>
                                        </Col>
                                    </Row>
                                    <Row class="pr-0"> 
                                        <Col class="pr-0"> Объектно-ориентированный язык программирования с минималистичным синтаксисом. </Col> 
                                    </Row>
                                </Row>
                                <hr class="my-2"/>
                                <Row> <Col xs="auto"> <Link href="/project/kai"> Подробнее </Link> </Col> </Row>
                            </Row>
                        </CardBlock> 
                    </Col>
                    <Col xs="auto"> 
                        <CardBlock style="width: 300px" title="Зелёный Угол" icon="🍀">
                            <Row>
                                <Row style="height: 125px; flex-direction: column;" class="pr-0"> 
                                    <Row class="pr-0"> 
                                        <Col xs="auto" class="pr-0 mb-1">
                                            <Badge pill bg="primary" class="mr-1"> Vue </Badge>
                                        </Col>
                                    </Row>
                                    <Row class="pr-0"> 
                                        <Col class="pr-0"> Быстрая доставка импортных товаров по всей России. </Col> 
                                    </Row>
                                </Row>
                                <hr class="my-2"/>
                                <Row> <Col xs="auto"> <Link href="/project/zeleny"> Подробнее </Link> </Col> </Row>
                            </Row>
                        </CardBlock> 
                    </Col>
                </Row>
            </Container>
            

            <br/>
            <Row style={{"justify-content": "center"}}>
                <Col xs="auto"><h1> Оставьте свой отзыв </h1></Col>
            </Row>
            <br/>
            {/* <hr/> */}
            <Row style={{"justify-content": "center"}}>
                <Col style="max-width: 640px"><CardContact/> </Col>
            </Row>
            <br/>
		</Container>
	);
};
