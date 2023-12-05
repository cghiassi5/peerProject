import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useOpenConnection } from './hooks'
import Peer, { DataConnection } from 'peerjs';
function App() {
  const peerIdRef = useRef<HTMLDivElement>(null);
  const [peerId, setPeerId] = useState<string | null>(null);
  const [otherPeer, setOtherPeer] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const myConnRef = useRef<DataConnection | null>(null);
  useEffect(() => {
    receiveMessages
  }, []);

  const peer = new Peer();

  // Use the custom hook to set up the connection and get the peer ID
  useOpenConnection(setPeerId);

  const receiveConnection = () => {
    let myConn = peer.connect(otherPeer);
    myConn.on('open', () => {
      myConnRef.current = myConn;
      console.log('connection is open');
    });
    myConn.on('close', () => {
    });
    receiveMessages();
  };

  const sendMessage = () => {
    if(myConnRef.current){
      console.log(message, 'connection is open and can send messages');
      myConnRef.current.send(message);
    }
    else{
      console.log('connection is not open yet');
    }
  };
  const receiveMessages = () => {
    if(myConnRef.current) {
      myConnRef.current.on('data', (data) => {
        console.log(data)
      })
    }
  }

  //  const receiveMessages = () => {
  //   if(conn && conn.open){
  //     conn.on('data', (data) => {
  //       console.log('received', data)
  //     })
  //   }
  //   };


  useEffect(() => {
    if (peerIdRef.current) {
      peerIdRef.current.innerText = `Your peer ID is: ${peerId}`;
    }
  }, [peerId]);
  return (
    <>
      <div className="card">
        <div ref={peerIdRef}> </div>
        <button onClick={() => receiveConnection()}>Connect</button>
      </div>
      <div>
        <input value={otherPeer} onChange={(event) => setOtherPeer(event.target.value)} />
      </div>
      <div>
        {myConnRef.current && myConnRef.current.open ? (
          <p>Connection is open</p>
        ) : (
          <p>Connection is closed</p>
        )}
      </div>
      <div>
        message
        <input value={message} onChange={(event) => setMessage(event.target.value)} />
      </div>
      <div>
        <div>
        <button onClick={() => sendMessage()}> send message </button>
        </div>
      </div>
    </>
  )
}

export default App
