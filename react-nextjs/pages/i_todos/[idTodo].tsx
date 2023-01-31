import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {TodoHttp} from "../../servicios/http/todo.http";

// /i_todos
// [idTodo].tsx

export default function (){
    return(
        <>
            <Layout title={"To do's hijo"}>
                <h1>To do's hijo</h1>
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {idTodo: '1'},
        },
        {
            params: {idTodo: '2'},
        },
        {
            params: {idTodo: '4'},
        }
    ];
    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (
    {params}
) => {
    try {
        // fetch
        const id = params?.idTodo as string
        const resultado = await TodoHttp(id)
        return {props: {todo: resultado}}
    }catch (err: any){
        return {props: {errors: err.message}}
    }
}