import type React from 'react';

type Prop = {
	children: React.ReactNode;
};

const Layout = ({ children }: Prop) => {
	return <main className="p-4 lg:p-6 mx-auto md:max-w-270 lg:max-w-370">{children}</main>;
};

export default Layout;
