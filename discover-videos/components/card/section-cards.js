import Card from "./card";
import Link from "next/link";
import clsx from "classnames";
import styles from "./section-cards.module.css";

const SectionCards = (props) => {
	const { title } = props;
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Disney</h2>
			<div className={styles.cardWrapper}>
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
				<Card imgUrl="/static/clifford.webp" size="large" />
			</div>
		</section>
	);
};

export default SectionCards;