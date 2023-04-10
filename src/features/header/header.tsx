import { children, Component, createSignal, JSX, mergeProps } from 'solid-js';
import { Nav, Navbar, Container, NavbarCollapse } from 'solid-bootstrap';
import { State, Events, store } from '../../store';
import { useStoreon } from '@storeon/solidjs';
import { Icon } from '../../components';

import Link from '../../components/Link';
import styles from './style.module.scss';

import toggleOff from '../../assets/toggle_off.svg';
import toggleOn from '../../assets/toggle_on.svg';
import IconToggle from '../../assets/toggle.svg';
// import Logo from '../../assets/logo2.svg'; <img width={48} src={Logo}/>

interface ItemNameProps {
	children?: any,
	href?: String,
	onClick?: any
}

const ItemName: Component<ItemNameProps> = (props: any) => {
	const merged = mergeProps({
		href: "/",
		onClick: {}
	}, props);
	const c = children(() => props.children);

	return <Nav.Item class={styles.item} onClick={props.onClick}>
		<Link href={merged.href} class={styles.link}>
			{/* <span class={styles.itemSelectSign}>{merged.selected === merged.select ? "+" : "-"}</span> */}
			{/* {merged.name} */}
			{c()}
		</Link>
	</Nav.Item>
};

export const Header: Component = (props) => {
	const [state, dispatch] = useStoreon<State, Events>();
	const [expanded, setExpanded] = createSignal(false);

	const onClickItem = (id: Number) => {
		// console.log("click", id);
		setExpanded(false);
	}

	return (
		<Navbar collapseOnSelect={false}
			bg="dark" variant="dark"
			sticky="top" expand="lg"
			class={styles.Header}
		>
			<Container class={styles.container}>
				<Navbar.Brand class={styles.brand} onClick={() => {onClickItem(0)}}> <Link href="/" class={styles.title}> Home Blog </Link> </Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" class={styles.toggle} onClick={() => {setExpanded(!expanded())}}>
						<Icon width={24} src={IconToggle}/>
					{/* <img class={theme() === "dark" ? styles.toggleImageDark : styles.toggleImageWhite} src={IconToggle} alt="–" /> */}
					{/* expanded() ? toggleOn : toggleOff */}
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav" in={expanded()}>
					<Nav class={styles.items} navbarScroll>
						<ItemName href="/blog" 		onClick={() => {onClickItem(1)}}> Блог </ItemName>
						<ItemName href="/projects" 	onClick={() => {onClickItem(2)}}> Проекты </ItemName>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
