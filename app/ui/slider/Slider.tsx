import React, { FC } from 'react'

import { ISlide } from './slider.interface'

import { useSlider } from './useSlider'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'

import { CSSTransition } from 'react-transition-group'

import styles from './Slider.module.scss'

interface ISlider{
	slides:ISlide[]
	buttonTitle?:string
}

const Slider:FC<ISlider> = ({slides,buttonTitle}) => {
	const {index, isNext, isPrev, handleClick, slideIn} = useSlider(slides.length)

	return (
		<div className={styles.slider}>
			<CSSTransition in={slideIn} classNames='slide-animation' timeout={300} unmountOnExit >
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle}/>
			</CSSTransition>
			{isPrev && <SlideArrow variant='left' clickHandler={()=> handleClick('prev')}/>}

			{isNext && <SlideArrow variant='right' clickHandler={()=> handleClick('next')}/>}
		</div>
	)
}

export default Slider
