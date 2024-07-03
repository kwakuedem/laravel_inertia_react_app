import { Link } from "@inertiajs/react"
import Layout from "../Layout/Layout"

function Home({name,posts}){
    console.log(posts)
    return(
        <>
            <h1 className="title">Hello {name}</h1>
            
                {posts.data.map(post=>(
                    <div key={post.id} className="p-4 bottom-1 border-b-2 ">
                        <div className="py-2">
                            <span className=" text-slate-500">Posted on: </span>
                            <span className=" text-slate-500">{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p>{post.body}</p>
                        <div className=" flex gap-3">
                        <Link className="primary-btn w-[12%] mt-3" href={`/posts/${post.id}`}>Read More ...</Link>
                        <Link className="success-btn w-[12%] mt-3" href={`/posts/${post.id}/edit`}>Edit</Link>
                 
                        </div>
                           </div>
                ))}
        </>
    )

}
Home.layout=page=><Layout children={page}/>

export default Home