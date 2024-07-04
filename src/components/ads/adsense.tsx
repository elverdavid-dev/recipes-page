import Script from 'next/script'
import React from 'react'

const Adsense = () => {
	return (
		<Script
			async
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8872160626882067"
			crossOrigin="anonymous"
			strategy="afterInteractive"
		/>
	)
}

export default Adsense
