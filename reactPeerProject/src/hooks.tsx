import { useEffect } from 'react';
import Peer, { DataConnection } from 'peerjs';

const peer = new Peer();

//let conn: DataConnection;
export const useOpenConnection = (setPeerId: (peerId: string | null) => void) => {
    useEffect(() => {
      const createConnection = () => {
        peer.on('open', function(id) {
          setPeerId(id); // Set the peer ID using the provided callback
        });
      };
      console.log('creating connection')
      createConnection();
  
      return () => {
        // Cleanup code (if needed)
      };
    }, [setPeerId]);
  };