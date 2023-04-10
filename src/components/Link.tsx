import { children, Component, createMemo, createSignal, mergeProps } from 'solid-js';
import { useStoreon } from '@storeon/solidjs';
import { State, Events } from '../store';

import styles from './Link.module.scss';

interface LinkProps {
	children?: any,
	class?: String,
	href: String
}

const Link: Component<LinkProps> = (props: any) => {
	// const location = useLocation();
	const [state, dispatch] = useStoreon<State, Events>();
	const c = children(() => props.children);
	const onClick = () => {
		// console.log(props.href);
		const link = state.page.toLink;
		if (link != props.href) {
			// console.log("goin to", props.href)
			dispatch("page/set/link", props.href);
		}
	}

	return <div class={props.class ? props.class : styles.Link} onClick={onClick}> 
		{c()}
	</div>
}

export default Link;