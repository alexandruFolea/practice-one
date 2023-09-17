import React from 'react';
import Image from 'next/image';

export default function Card() {
	const svg = '/../images/icon-work.svg';
	return (
		<div className='card__container'>
			<div className='card__top__image'>
				<Image src={svg} alt='jeremy image' width={60} height={60} />
			</div>
			<div className='card__container__body'>
				<div className='card__container__body__left'>
					<h2>Work</h2>
					<h3>32hrs</h3>
				</div>
				<div className='card__container__body__right'>
					<h3>...</h3>
					<p>Last Week - 36hrs</p>
				</div>
			</div>
		</div>
	);
}
