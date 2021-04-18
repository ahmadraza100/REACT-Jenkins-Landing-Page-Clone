import React from 'react'
import BlogData from "./BlogData"
import BlogCard from "./BlogCard"

function Blogs() {
    return (
        
        <div style={{display:"flex" , justifyContent:"left" ,flexDirection:"column" , alignItems:"center" , textAlign:"left"}}>
        <h1>Recent Blog Posts</h1>

            <div style={{width:"60vw"}}>
                {BlogData.map((val)=>{
                    return(
                        <BlogCard link={val.link} title={val.title} disc={val.disc} author={val.author}/>
                        
                    )
                })}
            </div>
            <br/>

        </div>
        
    )
}

export default Blogs
