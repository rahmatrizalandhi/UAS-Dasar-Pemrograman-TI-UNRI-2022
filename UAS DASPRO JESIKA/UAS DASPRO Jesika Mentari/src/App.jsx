import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Modal from 'react-modal';
import { ModalProvider, ModalContext, ModalRoot } from 'react-multi-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

let i = 6;
function App() {
	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [isbn, setIsbn] = useState('');
	const [author, setAuthor] = useState('');
	const [books, setBooks] = useState([
		{
			id: 1,
			title: 'Based Design Mobile Learning Course on Android',
			author: 'Liranti Rahmelina',
			isbn: '1978-0524-2528-6374',
		},
		{
			id: 2,
			title: 'Development of Sales Application Using QR Code',
			author: 'Ricky Akbar, Husnil Kamil',
			isbn: '1978-0524-2528-6374',
		},
		{
			id: 3,
			title:
				'Perancangan dan Implementasi Web Service pada Aplikasi Permainan ',
			author: 'Gilang Arsya Priyatna Zaman',
			isbn: '1978-0524-2528-6374',
		},
		{
			id: 4,
			title: 'Perancangan Augmented Reality Media Markerless PoI',
			author: 'Abraham Christover Manuputty',
			isbn: '1978-0524-2528-6374',
		},
		{
			id: 5,
			title:
				'Pengembangan SIG Berbasis Node.JS untuk Pemetaan Mesin dan Tracking',
			author: 'Rachmat Fajrin',
			isbn: '1978-0524-2528-6374',
		},
	]);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	const handleCreate = (e) => {
		e.preventDefault();
		setBooks([
			...books,
			{
				id: i++,
				title,
				isbn,
				author,
			},
		]);
		setTitle('');
		setIsbn('');
		setAuthor('');
		setIsOpen(false);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		const newState = books.map(({ id, title, isbn, author }) => {
			if (id === e) {
				return { ...books, id: i++, title, isbn, author };
			}

			// 👇️ otherwise return object as is
			return books;
		});
		setBooks(newState);
		setIsOpen(false);
	};

	return (
		<div>
			<h1>Database Jurnal Dengan React JS</h1>

			<button onClick={openModal}>Create New Journal</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<button onClick={closeModal}>close</button>
				<form onSubmit={handleCreate}>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Title"
					/>
					<input
						type="text"
						value={isbn}
						onChange={(e) => setIsbn(e.target.value)}
						placeholder="ISBN"
					/>
					<input
						type="text"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
						placeholder="Author"
					/>
					<button type="submit">Create</button>
				</form>
			</Modal>

			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th style={{ width: '400px' }}>Title</th>
						<th>ISBN</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{books.length == 0 ? (
						<tr>
							<td>
								<p>Data Kosong</p>
							</td>
						</tr>
					) : (
						books.map(({ id, title, author, isbn }) => (
							<tr key={id}>
								<td>{id}</td>
								<td>{title}</td>
								<td>{isbn}</td>
								<td>{author}</td>
								<td>
									<button className="btn-sec" onClick={openModal}>
										Edit
									</button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

export default App;
