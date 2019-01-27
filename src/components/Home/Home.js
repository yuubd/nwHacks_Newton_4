import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import vanUrl from './van.png';
import './Home.css';
class Home extends Component {
	render() {
		return (
			<article>
				<nav className=" dt h-10 w-100 relative bg-black-80 center">
					<div className="dtc v-mid tr pa3">
						<Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/">
							How it Works
						</Link>
						<Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/register">
							Register
						</Link>
						<Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/login">
							Login
						</Link>
					</div>
				</nav>
				<div
					className="vh-100 flex-column w-100 tc relative white cover-ns cust1"
					style={{
						backgroundImage: `url(${vanUrl})`
					}}
				>
					<div className="dt h-100 w-100 absolute bg-black-60 center">
						<div className="mt6">
							<header className="white-70">
								<h2 className="f6 fw1 ttu tracked mb2 lh-title">nwHacks2019</h2>
								<h3 className="f6 fw1 lh-title">January 26th</h3>
							</header>
							<h1 className="f1 f-headline-l fw1 i white-60">VanSheltery</h1>
							<blockquote className="ph0 mh0 measure f4 lh-copy center">
								<p className="fw1 white-70">It's the space you manage accomodations for society.</p>
								<cite className="f6 ttu tracked fs-normal">team_newton_4</cite>
							</blockquote>
						</div>
					</div>
				</div>
				<div className="center measure-wide-custom f5 pv5 lh-copy ph2">
					<h1 className="f1 lh-title">VanSheltery provides an efficient, accurate, real-time capacity management.</h1>
					<p>
						The choice of paper size is one of the first of any given work to be printed. There are two basic paper size systems in the world: the
						international A sizes, and the American sizes.
					</p>
					<p>
						The international Standard paper sizes, called the A series, is based on a golden rectangle, the divine proportion. It is extremely
						handsome and practical as well. It is adopted by many countries around the world and is based on the German DIN metric Standards. The
						United States uses a basic letter size (8 1/2 x 11”) of ugly proportions, and results in complete chaos with an endless amount of paper
						sizes. It is a by-product of the culture of free enterprise, competition and waste. Just another example of the misinterpretations of
						freedom.
					</p>
					<p>
						These are the basic DIN sizes in mm. for : A0, 841x1189 - A1, 594x841 - A2, 420x594 - A3, 297x420 - A4, 210x297 - A5, 148x210 - A6, 105
						x148 - A7, 74x 105 - A8, 52x74 - A9, 37x52 - A10, 26x37.
					</p>
					<p>
						The A4 is the basic size for stationary. Two thirds of it is a square, a nice economical happenstance resulting from the golden
						rectangle. It is one of the reasons we tend to use as much as possible the DIN sizes: proportions are always leading to other nice
						proportions.
					</p>
					<p>
						This does not happen with the American basic size which leads to nothing. I counted 28 different standard sizes in USA!. The only reason
						we use it is because everybody in USA uses it, all stationary in USA is that size, so are manilla folders, les and of ce equipment! The
						repercussion of ugliness is endless.
					</p>
				</div>
			</article>
		);
	}
}

export default Home;
