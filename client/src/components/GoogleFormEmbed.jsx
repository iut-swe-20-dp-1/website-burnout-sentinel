import React from 'react'

const GoogleFormEmbed = ({ embed_link }) => {
    return (
        <iframe src={`${embed_link}`} width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    )
}

export default GoogleFormEmbed