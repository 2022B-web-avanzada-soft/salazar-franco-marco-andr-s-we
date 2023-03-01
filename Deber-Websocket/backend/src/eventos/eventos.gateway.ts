import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from 'socket.io';
@WebSocketGateway(
    11202, // Puerto donde esta escuchando el servidor de websockets
    {
        cors: {
            origin: '*', // Habilitando la conexion desde cualquier IP
        }
    })
export class EventosGateway{

    @SubscribeMessage('seguirRobotEspecifico') // Nombre metodo "unirseSala"
    unirseSala(
        @MessageBody()
            message: { robotId: string, nombre: string }, // parametros metodo
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.robotId); // socket.join agrupa a los clientes de websockets
                                     // segun un identificador. Al unirse a una sala
                                     // podemos escuchar los mensajes de esa sala.
        const mensajeDeBienvenidaRobot = {
            mensaje: `Bienvenido ${message.nombre} al seguimiento del robot ${message.robotId}`};
        socket.broadcast
            .to(message.robotId) // Manda el mensaje a un grupo en especifico segun el Idenfiticador
            .emit('escucharEventoUnirseRobot',   // los que ESCUCHAN el evento en este grupo
                mensajeDeBienvenidaRobot);       // reciben ese mensaje
        return {mensaje: 'ok'};
    }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        @MessageBody()
            message: { robotId: string, lugar: string, mensaje: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        // backend
        const mensajeRobot = {
            lugar: message.lugar,
            mensaje: message.mensaje,
            robotId: message.robotId
        };
        socket.broadcast
            .to(message.robotId) // Sala a la que enviamos el mensaje
            .emit('escucharEventoMensajeRobot', mensajeRobot); // nombre del evento y datos a enviar
        return {mensaje: 'ok'}; // Callback
    }

}