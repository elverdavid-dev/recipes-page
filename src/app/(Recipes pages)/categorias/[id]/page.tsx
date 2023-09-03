interface Props {
	params: { id: string };
}
const page = ({ params }: Props) => {
	console.log(params);
	return <div>page</div>;
};

export default page;
