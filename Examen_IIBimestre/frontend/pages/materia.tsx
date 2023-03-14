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
    Checkbox, FormControlLabel, Select, InputLabel, MenuItem, Box
} from "@mui/material";
import {useForm, SubmitHandler} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import {ProfesorInterface} from "../interfaces/profesor-interface";
import {MateriaInterface} from "../interfaces/materia-interface";

const URL = "http://localhost:3030/materia";
type Inputs = {
    id: number;
    nombre: string;
    facultad: string;
    semestre: string;
    estudiantes: number;
    profesor?:  number;
};

export default function () {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<Inputs>();
    const [openCreateInstanceDialog, setOpenCreateInstanceDialog] = useState(false);
    const [materias, setMaterias] = useState([] as MateriaInterface[]);
    const [profesores, setProfesores] = useState([] as ProfesorInterface[]);
    const [materia, setMateria] = useState({} as MateriaInterface);

    useEffect(
        () => {
            const getMaterias = async () => {
                const response = await fetch(URL);
                const materias = await response.json();
                setMaterias(materias);
            }
            const getProfesores = async () => {
                const response = await fetch("http://localhost:3030/profesor");
                const profesores = await response.json();
                setProfesores(profesores);
            }
            getMaterias();
            getProfesores();
        },
        []
    )

    function MateriaCards(): JSX.Element[]  {
        const returnCards: JSX.Element[] = [];
        materias.forEach((materia: MateriaInterface) => {
            returnCards.push(
                <Grid item xs={12} bgcolor={"#ECEBEB"} padding={"1rem"} sx={{
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                }} key={materia.id}>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <h2 style={{color: "#6F6F6F"}}>{materia.nombre}</h2>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <p style={{color: "#6F6F6F"}}><strong>Facultad: </strong> {materia.facultad}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Semestre: </strong>{materia.semestre}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Numero Estudiantes: </strong>{materia.estudiantes}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Profesor: </strong>{typeof materia.profesor === "number" ? "Sin profesor asignado" : materia.profesor?.nombre}</p>
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
                            }} onClick={(e) => {handleEditInstance(materia)}}>
                                Editar
                            </Button>
                            <Button variant={"contained"} style={{
                                borderRadius: 10,
                                backgroundColor: "#24fb53",
                            }} sx={{
                                marginLeft: "1rem",
                            }} onClick={(event) => {handleDeleteInstance(materia.id)}}>
                                Eliminar
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            )
        })
        return returnCards;
    }


    const handleDeleteInstance = (materiaId: number) => {
        axios.delete(`${URL}/${materiaId}`).then(r => {
            const newMaterias = materias.filter((materia: MateriaInterface) => materia.id !== materiaId);
            setMaterias(newMaterias);
        }).catch(e => {
            console.log(e);
        })

    }
    const handleCancelCreateInstanceDialog = () => {
        setMateria({} as MateriaInterface)
        setOpenCreateInstanceDialog(false);
    };
    const handleAcceptCreateInstanceDialog: SubmitHandler<Inputs> = data => {

        const newMateria: MateriaInterface = {
            id: data.id,
            nombre: data.nombre,
            facultad: data.facultad,
            semestre: data.semestre,
            estudiantes: +data.estudiantes,
            profesor: data.profesor,
        }
        axios.post(URL, newMateria).then(r => {
            newMateria.profesor = profesores.find((profesor: ProfesorInterface) => profesor.id === newMateria.profesor);
            const newMaterias = materias.concat(newMateria);
            setMaterias(newMaterias);
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });

    };
    const handleUpdateCreateInstanceDialog: SubmitHandler<Inputs> = data => {
        console.log(data)
        const newMateria: MateriaInterface = {
            id: materia.id,
            nombre: data.nombre,
            facultad: data.facultad,
            semestre: data.semestre,
            estudiantes: +data.estudiantes,
            profesor: data.profesor,
        }
        axios.put(`${URL}/${materia.id}`, newMateria).then(r => {
            newMateria.profesor = profesores.find((profesor: ProfesorInterface) => profesor.id === newMateria.profesor);
            const newMaterias = materias.map((materia: MateriaInterface) => {
                if (materia.id === newMaterias.id) {
                    return newMaterias;
                }
                return materia;
            });
            setMaterias(newMaterias);
            setMateria({} as MateriaInterface)
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });
    }
    const handleCreateInstance = () => {
        console.log("Create instance")
        setOpenCreateInstanceDialog(true);
    }
    const handleEditInstance = (c: MateriaInterface) => {
        setMateria(c);
        setOpenCreateInstanceDialog(true);
    }

    const openDataDialog = (materia: MateriaInterface) => {
        return(
            <Dialog open={openCreateInstanceDialog}>
                <DialogTitle>Crear una nueva Materia</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Los siguientes datos son requeridos para registrar una nueva materia.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nombre"
                        label="Nombre de de la materia"
                        defaultValue={materia.nombre}
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("nombre", {required: "Este campo es requerido"})}
                    />
                    {errors.nombre && <span>Este campo es requerido</span>}
                    <TextField
                        margin="dense"
                        id="facultad"
                        defaultValue={materia.facultad}
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("facultad", {required: "Este campo es requerido"})}
                    />
                    {errors.facultad && <><span>Este campo es requerido</span><br/></>}
                    <TextField
                        margin="dense"
                        id="estudiantes"
                        defaultValue={materia.estudiantes}
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("estudiantes", {required: "Este campo es requerido"})}
                    />
                    {errors.estudiantes && <><span>Este campo es requerido</span><br/></>}
                    <Select
                        margin="dense"
                        labelId="Profesor"
                        id="profesor"
                        label="Profesor"
                        defaultValue={typeof materia.profesor === "number" ? "Sin profesor asignado" : materia.profesor?.id}
                        fullWidth
                        variant="outlined"
                        {...register("profesor", {required: "Este campo es requerido"})}>
                        {profesores.map((profesor: ProfesorInterface) => {
                            return <MenuItem key={profesor.id} value={profesor.id}>{profesor.nombre}</MenuItem>
                        })
                        }
                    </Select>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelCreateInstanceDialog}>Cancelar</Button>
                    {materia.id? <Button onClick={handleSubmit(handleUpdateCreateInstanceDialog)} disabled={!isValid}>Actualizar</Button> :
                        <Button onClick={handleSubmit(handleAcceptCreateInstanceDialog)} disabled={!isValid}>Crear</Button>}
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
                            <h1>Materias</h1>
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
                                {MateriaCards()}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {openDataDialog(materia)}
        </Layout>
    )
}