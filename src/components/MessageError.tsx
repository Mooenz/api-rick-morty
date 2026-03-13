type Props = {
	error: string;
	reload?: () => void;
};

const MessageError = ({ error, reload }: Props) => {
	return (
		<div className="p-4 px-6 bg-red-500/10 text-red-500 flex flex-wrap gap-6 items-center justify-between rounded-2xl">
			{error}
			{reload && (
				<button onClick={reload} className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer active:scale-95 transition-all ease-in-out duration-300">
					Recargar
				</button>
			)}
		</div>
	);
};

export default MessageError;
