interface ProfileCircleProps {
	url: string;
	title: string;
}

export function ProfileCircle({ url, title }: ProfileCircleProps) {
	return (
		<img
			src={url}
			alt={title}
			className="rounded-full size-36"
		/>
	)
}
