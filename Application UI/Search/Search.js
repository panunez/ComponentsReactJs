import "../../styles.css";
export default function Search() {
	return (
		<div className='w-60 flex items-center h-8 '>
			
			<div className='mt-1 relative rounded-full shadow-md rounded-md'>
				<input
					type='search'
					name='price'
					id='price'
					className=' w-full pl-7 pr-7 sm:text-sm rounded-full h-10 border-gray-900 border'
					placeholder='Buscar'
				/>
				<div className=' absolute inset-y-0 right-0 shadow'>
					<div className='ml-4 mt-1 absolute  flex items-center pointer-events-none rounded-full w-8 h-8 shadow border  border-indigo-500'>
						<span className=' sm:text-sm flex items-center pl-2 text-indigo-500'>🔍︎</span>
					</div>
				</div>
			</div>
		</div>
	);
}
