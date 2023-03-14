import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Examen' }: Props) => (
    <div id="container">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className={styles.header}>
            <Link href="/" className={styles.elementos}>Inicio</Link>
            <Link href="/profesor" className={styles.elementos}>Profesores</Link>
            <Link href="/materia" className={styles.elementos}>Materias</Link>
        </header>
        <div id="content">{children}</div>
        <footer id="footer" className={styles.footer}>
            <p>Desarrollado por Marco Salazar marco.salazar02@epn.edu.ec</p>
        </footer>
    </div>
)

export default Layout
