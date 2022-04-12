import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css';
import clsx from "classnames";

Modal.setAppElement("#__next");

export async function getStaticProps() {

	//data to fetch from api
	const video = {
		title: 'Hi cute dog',
		publishTime: '1990-01-01',
		description: 'A big red dog that is super cute, can he get any bigger',
		channelTitle: "Paramount Pictures",
		viewCount: 10000,
	};

	return {
		props: {
			video,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10, // In seconds
	};
}

const Video = ({ video }) => {
	const router = useRouter();



	const { title, publishTime, description, channelTitle, viewCount } = video;

	return (
		<div className={styles.container}>
			<Modal
				isOpen={true}
				contentLabel="Watch the video"
				onRequestClose={() => router.back()}
				className={styles.modal}
				overlayClassName={styles.overlay}
			>
				<iframe
					id="player"
					className={styles.videoPlayer}
					type="text/html"
					width="100%"
					height="390"
					src={`http://www.youtube.com/embed/${router.query.videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=1`}
					frameborder="0">
				</iframe>

				<div className={styles.modalBody}>
					<div className={styles.modalBodyContent}>
						<div className={styles.col1}>
							<p className={styles.publishTime}>{publishTime}</p>
							<p className={styles.title}>{title}</p>
							<p className={styles.description}>{description}</p>
						</div>
						<div className={styles.col2}>
							<p className={clsx(styles.subText, styles.subTextWrapper)}>
								<span className={styles.textColor}>Cast: </span>
								<span className={styles.channelTitle}>{channelTitle}</span>
							</p>
							<p className={clsx(styles.subText, styles.subTextWrapper)}>
								<span className={styles.textColor}>View Count: </span>
								<span className={styles.channelTitle}>{viewCount}</span>
							</p>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Video;