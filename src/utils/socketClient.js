import io from 'socket.io-client';
import { API_ENDPOINT } from '../constants';

class SocketClient {
  constructor() {
    this.socket = null;
  }

  init() {
    this.socket = io(API_ENDPOINT);
  }

  getInstance() {
    return this.socket;
  }
}

export default new SocketClient();
