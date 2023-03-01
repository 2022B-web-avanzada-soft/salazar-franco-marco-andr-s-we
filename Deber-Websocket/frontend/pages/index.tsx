import Link from 'next/link'
import React, { Component } from "react";
import Layout from '../components/Layout'


const IndexPage = () => (
    <Layout title="LimpiaBot">
        <h1>Bienvenido al rastreador de su robot LimpiaBot</h1>
        <div>
            <img src="/imagenes/Robot.jpg" width="300"/>
        </div>
        <p>
            <Link href="/seguimiento">Para acceder al control de su robot ingrese a este enlace</Link>
        </p>
    </Layout>
)

export default IndexPage





