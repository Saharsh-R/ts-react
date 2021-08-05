interface HasId {
    id: number
}

interface DataGridProps<T> {
	items: T[];
}

export default function DataGrid<T extends HasId>({ items }: DataGridProps<T>) {
	return (
		<>
			<ul>
				{items.map((item) => (
					<li>{JSON.stringify(item)}</li>
                    // item. -> id comes as an autosuggestion
				))}
			</ul>
		</>
	);
}
