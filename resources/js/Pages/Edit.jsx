import { useForm } from "@inertiajs/react"
import Layout from "../Layout/Layout";

function Edit({post}){
    const{data,setData,put,processing,errors}=useForm({
        body:"",
    })

    function onChange(e){
        setData("body",e.target.value);
    }

    function submit(e){
        e.preventDefault();
        put(`posts/${post.id}`);
    }
    return(
        <>
            <h1 className="title">Edit a Post</h1>

            <form onSubmit={submit}>
                <textarea onChange={onChange} name="body" id="" cols="30" rows="10" className={`${errors.body ? "ring-1 ring-red-500" : "ring-1 ring-blue-400"}`}> {post.body}</textarea>
                {errors.body ? <p className=" error">{errors.body}</p> : ""}
                <button className="">Update Post</button>
            </form>
        </>
    )
}

Edit.layout=page=><Layout children={page}/>