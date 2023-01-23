// pages/d_use_context.tsx
import EjemploHookCustom from "../components/d_hook_custom/EjemploHookCustom";
import EContenedor from "../components/e_use_context/EContenedor";
import Layout from "../components/Layout";

export default function (){
    return(
        <>
            <Layout title={'Use Context'}>
                <h1>Use Context</h1>
                <EContenedor></EContenedor>
            </Layout>

        </>
    )
}