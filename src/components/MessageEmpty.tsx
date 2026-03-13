type Props = {
	message: string;
};

const MessageEmpty = ({ message }: Props) => {
	return <div className="p-4 px-6 bg-gray-500/10 text-gray-500 flex flex-wrap gap-6 items-center justify-between rounded-2xl">{message}</div>;
};

export default MessageEmpty;
