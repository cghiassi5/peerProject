import Peer, { DataConnection } from 'peerjs';
const peer = new Peer();

let conn: DataConnection;
export const openConnection = (element: HTMLTextAreaElement) => {
	const createConnection = () => {
		peer.on('open', function(id) {
	element.innerHTML = `your peer ID is:  + ${id}`
  	});
	};
	element.addEventListener('click', () => createConnection());
	createConnection();
};


export const receiveConnection = () => {
	const inputElement = document.querySelector<HTMLInputElement>('#myInput')!;
	const inputValue = inputElement.value;
	// console.log("Input Value:", inputValue);
	conn = peer.connect(inputValue);
	peer.on('connection', (connection) => {
		conn = connection;
		console.log('connected');
		conn.on('data', (data) => {
			console.log('received', data)
		});
	})
  };

  export const sendMessage = () => {
	const messageInput = document.querySelector<HTMLInputElement>('#messages');
	const messageValue = messageInput?.value;
  
	if (conn && conn.open) {
	  console.log('Sending message:', messageValue);
	  conn.send(messageValue);
	} else {
	  console.error('Connection is not open.');
	}
  };

  export const receiveMessages = () => {
	if(conn && conn.open){
		conn.on('data', (data) => {
			console.log('received', data)
		})
	}
  };
  
// export function setupCounter(element: HTMLButtonElement) {
// 	let counter = 0
// 	const setCounter = (count: number) => {
// 	  counter = count
// 	  element.innerHTML = `count is ${counter}`
// 	}
// 	element.addEventListener('click', () => setCounter(counter + 1))
// 	setCounter(0)
//   }
  