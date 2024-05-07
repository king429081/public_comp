import React from 'react';

const PageLayout: React.FC<any> = ({ children }) => {
	console.log('children', 123123123);
	return (
		<div>
			{/* <Header>213123asdjkhakjdhk</Header> */}
			{children}
		</div>
	);
};

export default PageLayout;
