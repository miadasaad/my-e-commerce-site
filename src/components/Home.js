import React, { Component } from 'react'
import Categories from './Categories'
import Deals from './Deals'
import Icons from './Icons'
import Images from './Images'
import Slider from './slider'
import Featured from './Featured'
import Banners from './Banners'
import HotCategory from './HotCategory'
import BestSeller from './BestSeller'
import LastBlog from './LastBlog'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='content'>
                    <Slider />
                    <Icons />
                    <Categories />
                    <Images />
                    <Deals />
                    <Featured />
                    <Banners />
                    <HotCategory />
                    <BestSeller />
                    {/* <LatestBlog /> */}
                    <LastBlog />
                </div>

            </div>

        )
    }
}
