import { useForm } from "@inertiajs/react"
import Layout from "../Layout/Layout"


const Create=()=>{

    const {data,setData,processing,errors,post}=useForm({
        body:"",
})

    const onChange=(e)=>{
        setData("body",e.target.value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        post('/posts');
    }

    console.log(errors);
    return(
        <>
        <h1 className="title">Create Post</h1>
            <form action="" method="post" className="w-[80%] m-auto" onSubmit={onSubmit}>
                <textarea name="body" id="" cols="30" rows="10" onChange={onChange} className={`${errors.body ? 'ring-1 ring-red-500': 'ring-1 ring-blue-500'}`}></textarea>
                {errors.body ? <p className="text-red-500 text-sm py-3">{errors.body}</p>:""}
                <button className="primary-btn mt-6">Create Post</button>
                
            </form>
        </>
    )
}

Create.layout=page=><Layout children={page}/>

export default Create