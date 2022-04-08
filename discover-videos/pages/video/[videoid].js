import { useRouter } from "next/router";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Video = () => {
	const router = useRouter();
	console.log({ router });
	return <div>Video page {router.query.videoId}</div>

};

export default Video;