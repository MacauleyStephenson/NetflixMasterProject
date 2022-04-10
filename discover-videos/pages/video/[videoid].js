import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css';

Modal.setAppElement("#__next");

const Video = () => {
	const router = useRouter();
	console.log({ router });
	return (
		<div className={styles.container}>
			<Modal
				isOpen={true}
				contentLabel="Watch the video"
				onRequestClose={() => router.back()}
				className={styles.modal}
				overlayClassName={styles.overlay}
			>
				<div>
					<iframe
						id="player"
						className={styles.videoPlayer}
						type="text/html"
						width="100%"
						height="390"
						src={`http://www.youtube.com/embed/${router.query.videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=1`}
						frameborder="0">
					</iframe>
				</div>
			</Modal>
		</div>
	);
};

export default Video;