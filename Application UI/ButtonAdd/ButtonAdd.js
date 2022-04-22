import { Fragment } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import "../../styles.css";
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function ButtonAdd() {
	return (
		<div className='ml-10 flex lg:mt-0 lg:ml-10  '>
			<span className='hidden sm:block '>
				<button
					type='button'
					className='bg-green-900 text-white inline-flex items-center px-4 py-2 border  rounded-md shadow text-sm font-medium  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
					<PlusIcon
						className='-ml-1 mr-2 h-5 w-5 text-white'
						aria-hidden='true'
					/>
					Agregar Nuevo
				</button>
			</span>
		</div>
	);
}
