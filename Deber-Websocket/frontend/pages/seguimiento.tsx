
import io from "socket.io-client"
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";
import MensajeDeSeguimiento, {MensajeChatProps} from "../components/MensajeDeSeguimiento";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);

const lugares = ["Cocina", "Cuarto", "Baño", "Comedor"]
const lugaresImagenes = ["","/imagenes/Cocina.jpg","/imagenes/Cuarto.jpg","/imagenes/Baño.png", "/imagenes/Comedor.jpg"]
let posicionActual = 0;


export interface FormularioModelo{
    robotId: string;
    lugar: string;
    mensaje: string;
}

export type Mensaje = FormularioModelo;

export default function (){
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[]);
    const [imagenes, setImagenes] = useState([] as string[]);

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            robotId: '',
            lugar: '',
            mensaje: '',
        },
        mode: 'all'
    })

    useEffect(
        ()=>{
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoUnirseRobot', (data: Mensaje ) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.robotId + ' - ' + data.mensaje,
                    nombre: data.lugar,
                    posicion: 'I',
                }
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                console.log('escucharEventoUnirseRobot');
            });
            socket.on('escucharEventoMensajeRobot', (data: { mensaje: string }) => {
                console.log('escucharEventoMensajeRobot');
            });

        },
        []
    )

    const unirseSeguimientoRobot = (data:FormularioModelo) => {
            const dataEventosSeguimientoRobot={
                robotId: data.robotId,
                nombre: data.lugar,
            };
            socket.emit(
                'seguirRobotEspecifico', // Nombre Evento
                dataEventosSeguimientoRobot, // Datos evento
                () => {
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: 'Bienvenido al seguimiento del robot ' + dataEventosSeguimientoRobot.robotId,
                        nombre: 'Sistema',
                        posicion: 'I'
                    };
                    setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            );
    }

    const verPosicionRobot = (data:FormularioModelo) => {
        const dataEventosSeguimientoRobot={
            robotId: data.robotId,
            lugar: data.lugar,
        };
        socket.emit(
            'enviarMensaje', // Nombre Evento
            dataEventosSeguimientoRobot, // Datos evento
            () => {
                if (posicionActual > 3){
                    posicionActual = 0;
                }
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: 'El robot ' + dataEventosSeguimientoRobot.robotId + ' se encuentra en ' + lugares[posicionActual],
                    nombre: 'Sistema',
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                posicionActual = posicionActual + 1;
            }
        );
    }

    return (
        <>
            <Layout title="Formulario">
                <h1>Seguimiento de Robot</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Ingrese los datos de su robot para rastrearlo</h1>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <form onSubmit={handleSubmit(unirseSeguimientoRobot)}>
                                <div className="mb-3">
                                    <label htmlFor="robotId" className="form-label">ID de Su Robot </label>
                                    <div id="robotIdHelp" className="form-text">
                                        Ingresa el ID de tu robot
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="EJ: 0245"
                                           id="robotId"
                                           {...register('robotId', {required: ' Ingresar robotId'})}
                                           aria-describedby="robotIdHelp"/>

                                    {errors.robotId &&
                                        <div className="alert alert-warning" role="alert">
                                            Tiene errores {errors.robotId.message}
                                        </div>
                                    }
                                </div>

                                <button type="submit"
                                        disabled={!isValid}
                                        className="btn btn-warning">
                                    Unirse a Seguir un robot
                                </button>
                                <button type="reset"
                                        className="btn btn-danger">
                                    Reset
                                </button>
                            </form>

                            <form onSubmit={handleSubmit(verPosicionRobot)}>
                                <div className="mb-3">
                                    <label htmlFor="robotId" className="form-label"> </label>
                                    <div id="robotIdHelp" className="form-text">
                                        Presione el Boton para ver la posicion actual
                                    </div>
                                    {errors.robotId &&
                                        <div className="alert alert-warning" role="alert">
                                            Tiene errores {errors.robotId.message}
                                        </div>
                                    }
                                </div>


                                <button type="submit"
                                        className="btn btn-warning">
                                    Ver posicion del robot
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        {mensajes.map((mensaje, indice) =>
                            <MensajeDeSeguimiento key={indice}
                                         mensaje={mensaje.mensaje}
                                         nombre={mensaje.nombre}
                                         posicion={mensaje.posicion}
                            />)
                        }
                        <div>
                            <img src={lugaresImagenes[posicionActual]} width="300"/>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}