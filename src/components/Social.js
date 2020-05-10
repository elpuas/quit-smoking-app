import React from 'react'

const Social = ({ src, className, alt }) => {
	return (
		<div>
			<img
			src={src}
			className={`icon-${ className }`}
			alt={alt}
			/>
		</div>
	)
}

export default Social