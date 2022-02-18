import styles from './banner.module.css';

const Banner = (props) => {
	const { title, subTitle, imgUrl } = props;


	const handleOnPlay = () => {
		console.log('handleOnPlay');
	}

	return (
		<div className={styles.container}>
			<div className={styles.leftWrapper}>
				<div className={styles.left}>
					<h3 className={styles.title}>{title}</h3>
					<h3 className={styles.subTitle}>{subTitle}</h3>
					<div className={styles.playBtnWrapper}>
						<button className={styles.playBtnWithIcon} onClick={handleOnPlay}>Play</button>
					</div>
				</div>
			</div>
			<div
				className={styles.bannerImg}
				style={{
					backgroundImage: `url(${imgUrl})`,
					width: '100%',
					height: '100%',
					position: 'absolute',
					backgroundSize: 'cover',
					backgroundPosition: '50% 50%',
				}}
			></div>
		</div>
	)
};

export default Banner;