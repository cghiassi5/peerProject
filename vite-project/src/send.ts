import Peer from 'peerjs';
const peer = new Peer();

let conn = peer.connect('dest-peer-id');

export const openConnection = (element: HTMLButtonElement) => {
	const createConnection = () => {
		peer.on('open', function(id) {
	element.innerHTML = `your peer ID is:  + ${id}`
  	});
	};
	element.addEventListener('click', () => createConnection());
	createConnection();
};

function receiveConnection() {
	const inputElement = document.querySelector<HTMLInputElement>('#myInput')!;
	const inputValue = inputElement.value;
	console.log("Input Value:", inputValue);
	
	// Continue with your code...
  }
// export function setupCounter(element: HTMLButtonElement) {
// 	let counter = 0
// 	const setCounter = (count: number) => {
// 	  counter = count
// 	  element.innerHTML = `count is ${counter}`
// 	}
// 	element.addEventListener('click', () => setCounter(counter + 1))
// 	setCounter(0)
//   }
  