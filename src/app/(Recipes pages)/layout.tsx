import { ChildrenProps } from "../layout";
import Navbar from "./components/Navbar";

const Layout = ({ children }: ChildrenProps) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
