import React, { useEffect } from 'react'

const Ad = ({ slotId, width, height }) => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }, [])

    return (
        <ins
            className='adsbygoogle'
            style={{ display: 'block', width: `${width}px`, height: `${height}px` }}

            data-ad-client='ca-pub-7798503110508426'
            data-ad-slot={slotId} />
    )
}

export default Ad