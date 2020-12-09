import React from 'react';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} style={{ margin: '100px 0' }}/>;
		return (
			<p style={{ fontSize: '25px' }}>
				We are waiting for the data to load!...
			</p>
		);
	};
}
export default PostLoading;