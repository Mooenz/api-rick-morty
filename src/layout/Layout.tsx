import type React from 'react';

type Prop = {
	children: React.ReactNode;
};

const Layout = ({ children }: Prop) => {
	return <main className="p-4 lg:p-6">{children}</main>;
};

export default Layout;
