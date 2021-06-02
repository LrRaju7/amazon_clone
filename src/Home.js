import React from 'react'

import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                className='home__image' src="https://www.digitaltveurope.com/files/2019/10/Free-Amazon-Prime.png
                " alt=''/>
                <div className='home__row'>
                    <Product 
                    id = {123123}
                    title = 'The Lean Startup web page editors now use Lorem Ipsum'
                    price = {29.99}
                    rating = {5}
                    image = 'http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
                    />
                    <Product 
                    id = {234234}
                    title = 'The Best Book Covers of January 2018 web page editors now use Lorem Ipsum'
                    price = {29.99}
                    rating = {5}
                    image = 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-jan-18/large/1coverhazelwood.jpg?1384968217'
                    />
                </div>
                <div className='home__row'>      
                    <Product 
                    id = {345345}
                    title = 'The best of 1984 web page editors now use Lorem Ipsum'
                    price = {19.99}
                    rating = {3}
                    image = 'https://www.designer-daily.com/wp-content/uploads/2017/02/1984-book-covers-2.jpg'
                    />
                    <Product 
                    id = {123123}
                    title = 'The Lean Startup web page editors now use Lorem Ipsum'
                    price = {11.99}
                    rating = {4}
                    image = 'http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
                    />
                    <Product
                    id = {234234} 
                    title = 'The Best Book Covers of January 2018 web page editors now use Lorem Ipsum'
                    price = {29.99}
                    rating = {5}
                    image = 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-jan-18/large/1coverhazelwood.jpg?1384968217'
                    />
                </div>
                <div className='home__row'>
                    <Product 
                    id = {345345}
                    title = 'The Best Book Covers of January 2018 web page editors now use Lorem Ipsum'
                    price = {29.99}
                    rating = {5}
                    image = 'https://i.dell.com/sites/imagecontent/shared-content/campaigns/en/PublishingImages/outlet-uk-images/1764-monitor-s2218m-p1917s-965x300-uk.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
