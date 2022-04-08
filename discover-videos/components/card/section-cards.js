import Card from "./card";
import Link from "next/link";
import clsx from "classnames";
import styles from "./section-cards.module.css";

const SectionCards = (props) => {
	const { title, videos = [], size } = props;
	console.log({ videos })
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.cardWrapper}>
				{videos.map((video, idx) => {
					console.log('video.id', video.id)
					return (
						<Link href={`/video/${video.Id}`}>
							<Card id={idx} imgUrl={video.imgUrl} size={size}
							/>
						</Link>
					)
				})}
			</div>
		</section>
	);
};

export default SectionCards;