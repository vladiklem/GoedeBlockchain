// Loading properties file
const PropertiesReader = require('properties-reader');
var properties = PropertiesReader('properties.txt');

var p2p = {
    createPeer: function (id) {
        peer = new global.Peer(id, {
            host: properties.path().p2p.host,
            port: properties.path().p2p.port,
            debug: 3 })
        return peer
    },
    sendData: function (from_peer, to_peer_id, data) {
        console.log("Waiting connection.");
        var connection = from_peer.connect(to_peer_id)
        console.log("Waiting open.");
        connection.on('open', function () {
            connection.send(data)
            console.log('Send:', data)
        })
    },
    getData: function (connection) {
        connection.on('data', function (data) {
            console.log('Recieved:', data);
            alert('Recieved:', data);
        });
    }
}

module.exports = p2p
