import io from 'socket.io-client'

const socket = io(`ws://${window.location.origin}`)
socket.on('receiveMsg', function (data) {
    console.log('Receiving:', data)
})
socket.emit('sendMsg', {name: 'Tom', date: Date.now()})
console.log('Sending:', {name: 'Tom', date: Date.now()});