import styles from './Loading.module.css'

export default function Loading() {
	return (
		<div
			className='d-flex w-100 h-100 align-items-center justify-content-center'
			style={{
				backgroundColor: 'rgba(0,0,0,0.4)',
				zIndex: 999,
			}}
		>
			<div className={styles['globe-container']}>
				<div className={styles.globe}></div>
			</div>
			<img
				src='https://www.escegis.com/files/images/logos/escegis.png'
				alt=''
			/>
		</div>
	)
}
