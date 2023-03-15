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
import {ProductoInterface} from "../interfaces/producto-interface";

const URL = "http://localhost:3030/producto";

type Inputs = {
    id: number;
    nombre: string;
    cantidad: number;
    precio: number;
    tieneIva: boolean;
};

export default function () {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<Inputs>();
    const [openCreateInstanceDialog, setOpenCreateInstanceDialog] = useState(false);
    const [producto, setProducto] = useState({} as ProductoInterface);
    const [productos, setProductos] = useState([] as ProductoInterface[]);

    useEffect(
        () => {
            const getProductos = async () => {
                const response = await fetch(URL);
                const productos = await response.json();
                setProductos(productos);
            }
            getProductos();
        },
        []
    )

    function ProductoCards(): JSX.Element[]  {
        const returnCards: JSX.Element[] = [];
        productos.forEach((productos: ProductoInterface) => {
            returnCards.push(
                <Grid item xs={12} bgcolor={"#ECEBEB"} padding={"1rem"} sx={{
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                }} key={productos.id}>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <h2 style={{color: "#6F6F6F"}}>{productos.nombre}</h2>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <p style={{color: "#6F6F6F"}}><strong>Nombre: </strong> {productos.nombre.toString()}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Cantidad: </strong>{productos.cantidad}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Precio: </strong>{productos.precio}</p>
                            <p style={{color: "#6F6F6F"}}><strong>Tiene IVA?: </strong>{productos.tieneIva? "Si" : "No"}</p>
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
                            }} onClick={(e) => hanldeUpdateInstanceDialog(productos)}>
                                Editar
                            </Button>
                            <Button variant={"contained"} style={{
                                borderRadius: 10,
                                backgroundColor: "#24fb53",
                            }} sx={{
                                marginLeft: "1rem",
                            }} onClick={(e) => handleDeleteInstance(productos.id)}>
                                Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
        return returnCards;
    }


    const handleDeleteInstance = (productoId: number) => {
        axios.delete(`${URL}/${productoId}`).then(r => {
            const newProductos = productos.filter((producto: ProductoInterface) => producto.id !== productoId);
            setProductos(newProductos);
        }).catch(e => {
            console.log(e);
        })

    }

    const hanldeUpdateInstanceDialog = (producto: ProductoInterface) => {
        setProducto(producto);
        setOpenCreateInstanceDialog(true);
    }

    const handleCancelCreateInstanceDialog = () => {
        setProducto({} as ProductoInterface);
        setOpenCreateInstanceDialog(false);
    };
    const handleAcceptCreateInstanceDialog: SubmitHandler<Inputs> = data => {
        const newProducto: ProductoInterface = {
            id: 1,
            nombre: data.nombre,
            cantidad: +data.cantidad,
            precio: +data.precio,
            tieneIva: data.tieneIva,
        }
        axios.post(URL, newProducto).then(r => {
            setProductos([...productos, r.data]);
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });
    };
    const handleAcceptUpdateInstanceDialog: SubmitHandler<Inputs> = data => {
        const newProducto: ProductoInterface = {
            id: producto.id,
            nombre: data.nombre,
            cantidad: +data.cantidad,
            precio: +data.precio,
            tieneIva: data.tieneIva,
        }
        axios.put(`${URL}/${producto.id}`, newProducto).then(r => {
            const newProducto = productos.map((producto: ProductoInterface) => {
                if (producto.id === r.data.id) {
                    return r.data;
                }
                return producto;
            });
            setProductos(newProducto);
            setOpenCreateInstanceDialog(false);
        }).catch(e => {
            console.log(e);
        });
    }

    const handleCreateInstance = () => {
        console.log("Create instance")
        setOpenCreateInstanceDialog(true);
    }

    const renderDataDialog = (producto?: ProductoInterface) => {
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
                        defaultValue={producto?.nombre}
                        id="name"
                        label="Nombre del Profesor"
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register("nombre", {required: "Este campo es requerido"})}
                    />
                    {errors.nombre && <span>Este campo es requerido</span>}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelCreateInstanceDialog}>Cancelar</Button>
                    {producto?.nombre && <Button onClick={handleSubmit(handleAcceptUpdateInstanceDialog)} disabled={!isValid}>Actualizar</Button>}
                    {!producto?.nombre && <Button onClick={handleSubmit(handleAcceptCreateInstanceDialog)} disabled={!isValid}>Crear</Button>}
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
                                {ProductoCards()}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {renderDataDialog(producto)}
        </Layout>
    )
}