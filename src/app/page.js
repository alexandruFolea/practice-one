import Card from './components/Card';
import Image from 'next/image';

export default function Home() {
	const jeremyImage = '/../images/image-jeremy.png';

	return (
		<main className='main__container'>
			{/* user card start */}
			<div className='user__card'>
				<div className='user__card__image'>
					<Image src={jeremyImage} alt='jeremy image' width={60} height={60} />
				</div>
				<div className='user__card__info'>
					<p className='user__card__info__report'>Report for:</p>
					<p className='user__card__info__name'>Jeremy Robson</p>
				</div>
			</div>
			{/* user card finish */}
			{/* --------------- */}
			{/* card start */}
			<Card />
		</main>
	);
}
