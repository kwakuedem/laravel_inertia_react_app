import { Link } from "@inertiajs/react"
import Layout from "../Layout/Layout"

const Show=({post,latestPost})=>{
    console.log(latestPost)
    return(
        <>
            <h1 className="title">Show Post</h1>

            <div>
                <p>{post.body}</p>
            </div>

            <div className=" p-3 mt-6"> 
                <h2 className=" text-slate-500 font-bold underline text-lg">Latest Posts</h2>

                <div>
                    {latestPost.map(latestpost=>(
                        <Link   href={`${latestpost.id}`} key={latestpost.id}>
                        <div className="p-3 border-b-2">
                            <p className=" text-slate-700">{latestpost.body}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

Show.layout=page=><Layout children={page}/>
export default Show