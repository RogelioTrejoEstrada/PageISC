import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class CarouselWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.titles = props.titles;
		this.descriptions = props.descriptions;
		this.images = props.images;
		this.interval = props.interval === undefined ? 500 : props.interval;
	}

	ConvertDataToCarousel() {
		const items = [];
		for(let i = 0; i < this.titles.length; i++) {
			items.push(
				<Carousel.Item interval={this.interval}>
					<img className="d-block w-100"
					src={this.images[i]}
					alt="Primera imagen"
					/>
					<Carousel.Caption>
						<h3>{this.titles[i]}</h3>
						<p>{this.descriptions[i]}</p>
					</Carousel.Caption>
				</Carousel.Item>
			);
		}
		return items;		
	}

	render() {
		return (
			<Carousel>
				{this.ConvertDataToCarousel()}
			</Carousel>
		);
	}

}

export default CarouselWrapper;