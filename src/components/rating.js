import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function Rating() {
    return (
        <div className="rating">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiOutlineStar></AiOutlineStar>
            <AiOutlineStar></AiOutlineStar>
        </div>
    )
}
