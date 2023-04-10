import { Component, createSignal } from 'solid-js';
import { onMount } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useRoutes, useNavigate } from "@solidjs/router";
import { Container } from 'solid-bootstrap';
import { Header, Footer } from './features';
import { routes } from './routes';
import { useStoreon } from '@storeon/solidjs';
import { State, Events, store } from './store';
import { Motion, MotionComponent } from "@motionone/solid";
import { Cookie } from './components';

import styles from './App.module.scss';

const App: Component = () => {
	
	// const [store, setStore] = createStore({
    //     usingCookie: false,
	// 	theme: localStorage.getItem("theme")
	// });

	const [state, dispatch] = useStoreon<State, Events>();
	
	let motionRef: MotionComponent | undefined;
	const navigate = useNavigate();
	const Routes = useRoutes(routes);
	// const isRouting = useIsRouting();

	const [theme, setTheme] = createSignal(state.page.theme);
	// same as subscribe
	store.on('page/set/theme', () => {
		// console.log("event", state.page.theme)
		setTheme(state.page.theme == "dark" ? "white" : "dark");
	})

	onMount(async () => {

    });

	const onChangeLocation = () => {
		const link = state.page.toLink;
		// console.log(`finally ${pathname()} to ${link}`);
		navigate(link, {});
		dispatch("page/set/transit", false);
	}

	return (
		<div class={theme()}>
			<main class={styles.App}>
				<Header />
				{/* <Button onClick={() => {
					let new_theme = store.theme;
					if (new_theme == "theme-dark") new_theme = "theme-white"; else new_theme = "theme-dark";
					console.log("change theme to", new_theme);
					setStore({
						...store,
						theme: new_theme
					});
					localStorage.theme = new_theme;
				}}>{store.theme}</Button> */}
				{!state.page.usingCookie ?
					<Cookie onConfirm={() => {
						// localStorage.using_cookie = "yes";
						dispatch('page/set/cookie', true);
						// setStore({
						// 	...store,
						// 	usingCookie: false
						// });
					}}/>
				: <></>} 
				<Motion.div
					animate={{ opacity: state.page.transit ? [1, 0] : [0, 1] }}
					transition={{ duration: 0.5 }}
					onMotionComplete={({ detail }) => { onChangeLocation() }}
				>
					<Container class={styles.container}>
						<Routes />
					</Container>
					<Footer />
				</Motion.div>
			</main>
		</div>
	);
};

export default App;