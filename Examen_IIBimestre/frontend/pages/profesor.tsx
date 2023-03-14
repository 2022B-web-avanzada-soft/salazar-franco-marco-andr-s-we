import Layout from "../components/Layout";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    DialogContentText,
    Checkbox, FormControlLabel, Box
} from "@mui/material";
import {useForm, SubmitHandler} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import {MateriaInterface} from "../interfaces/materia-interface";
import {ProfesorInterface} from "../interfaces/profesor-interface";

const URL = "http://localhost:3030/profesor";

type Inputs = {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    materias: MateriaInterface[];
};

export default function () {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<Inputs>();
    const [openCreateInstanceDialog, setOpenCreateInstanceDialog] = useState(false);
    const [profesor, setProfesor] = useState({} as ProfesorInterface);
    const [profesores, setProfesores] = useState([] as ProfesorInterface[]);

    useEffect(
        () => {
            const getProfesores = async () => {
                const response = await fetch(URL);
                const profesores = await response.json();
                setProfesores(profesores);
            }
            getProfesores();
        },
        []
    )

    function ProfesorCards(): JSX.Element[]  {
        const returnCards: JSX.Element[] = [];
        profesores.forEach((profesores: ProfesorInterface) => {
            returnCards.push(
                <Grid item xs={12} bgcolor={"#ECEBEB"} padding={"1rem"} sx={{
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                }} key={profesores.id}>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <h2 style={{color: "#6F6F6F"}}>{profesores.nombre}</h2>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <p style={{color: "#6F6F6F"}}><strong>Nombre: </strong> {profesores.nombre.toString()}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Apellido: </strong>{profesores.apellido}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Edad: </strong>{profesores.edad}</p>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <Button variant={"contained"} style={{
                                borderRadius: 10,
                                backgroundColor: "#24fb53",
                            }}  sx={{
                                marginLeft: "1rem",
                            }} onClick={(e) => hanldeUpdateInstanceDialog(profesores)}>
                                Editar
                            </Button>
                            <Button variant={"contained"} style={{
                                borderRadius: 10,
                                backgroundColor: "#24fb53",
                            }} sx={{
                                marginLeft: "1rem",
                            }} onClick={(e) => handleDeleteInstance(profesores.id)}>
                                Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
        return returnCards;
    }


    const handleDeleteInstance = (profesorId: number) => {
        axios.delete(`${URL}/${profesorId}`).then(r => {
            const newProfesores = profesores.filter((profesor: ProfesorInterface) => profesor.id !== profesorId);
            setProfesores(newProfesores);
        }).catch(e => {
            console.log(e);
        })

    }

    const hanldeUpdateInstanceDialog = (profesor: ProfesorInterface) => {
        setProfesor(profesor);
        setOpenCreateInstanceDialog(true);
    }

    const handleCancelCreateInstanceDialog = () => {
        setProfesor({} as ProfesorInterface);
        setOpenCreateInstanceDialog(false);
    };
    const handleAcceptCreateInstanceDialog: SubmitHandler<Inputs> = data => {
        const newProfesor: ProfesorInterface = {
            id: 1,
            nombre: data.nombre,
            apellido: data.apellido,
            edad: +data.edad,
        }
        axios.post(URL, newProfesor).then(r => {
            setProfesores([...profesores, r.data]);
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });
    };
    const handleAcceptUpdateInstanceDialog: SubmitHandler<Inputs> = data => {
        const newProfesor: ProfesorInterface = {
            id: profesor.id,
            nombre: data.nombre,
            apellido: data.apellido,
            edad: +data.edad,
        }
        axios.put(`${URL}/${profesor.id}`, newProfesor).then(r => {
            const newProfesores = profesores.map((profesor: ProfesorInterface) => {
                if (profesor.id === r.data.id) {
                    return r.data;
                }
                return profesor;
            });
            setProfesores(newProfesores);
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });
    }

    const handleCreateInstance = () => {
        console.log("Create instance")
        setOpenCreateInstanceDialog(true);
    }

    const renderDataDialog = (profesor?: ProfesorInterface) => {
        return (
            <Dialog open={openCreateInstanceDialog}>
                <DialogTitle>Crear un nuevo Profesor</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Los siguientes datos son requeridos para registrar un nuevo profesor.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        defaultValue={profesor?.nombre}
                        id="name"
                        label="Nombre del Profesor"
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("nombre", {required: "Este campo es requerido"})}
                    />
                    {errors.nombre && <span>Este campo es requerido</span>}
                    <TextField
                        margin="dense"
                        id="apellido"
                        defaultValue={profesor?.apellido}
                        type="string"
                        fullWidth
                        variant="outlined"
                        {...register("apellido", {required: "Este campo es requerido"})}
                    />
                    {errors.apellido && <><span>Este campo es requerido</span><br/></>}
                    <TextField
                        margin="dense"
                        id="edad"
                        label="Edad"
                        defaultValue={profesor?.edad}
                        type="integer"
                        fullWidth
                        variant="outlined"
                        {...register("edad", {required: "Este campo es requerido"})}
                    />
                    {errors.edad && <span>Este campo es requerido</span>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelCreateInstanceDialog}>Cancelar</Button>
                    {profesor?.nombre && <Button onClick={handleSubmit(handleAcceptUpdateInstanceDialog)} disabled={!isValid}>Actualizar</Button>}
                    {!profesor?.nombre && <Button onClick={handleSubmit(handleAcceptCreateInstanceDialog)} disabled={!isValid}>Crear</Button>}
                </DialogActions>
            </Dialog>
        )
    }

    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} bgcolor={"#fbbf24"} color={"white"} padding={"1rem"} >
                    <Grid container alignContent={"center"}>
                        <Grid item md={8}>
                            <h1>Profesores</h1>
                        </Grid>
                        <Grid item md={4} sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}>
                            <Button variant={"contained"} style={{
                                borderRadius: 35,
                                backgroundColor: "#24fb53",
                            }}  onClick={handleCreateInstance} sx={{
                                marginLeft: "1rem",
                            }}>
                                Agregar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '-1rem',
                }}>
                    <Grid item md={6}>
                        <Box sx={{
                            borderRadius: "1rem",
                            marginBottom: "1rem",
                            bgcolor: "#f5f5f5",
                            padding: "1rem",
                            marginTop: '2rem',
                        }}>
                            <Grid container>
                                {ProfesorCards()}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {renderDataDialog(profesor)}
        </Layout>
    )
}