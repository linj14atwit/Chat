function send_to_server(websocket, id, text){
    const message = {user_id: id, text: text};
    websocket.send(JSON.stringify(message));
}
 
function listen(){

}