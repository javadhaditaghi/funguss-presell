import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import blogItems from './blogsData.json'
import BlogCard from "./singleBlog"



const BlogsSuggestion = () => {
    return (
        <>
            {
                blogItems.map((blog, index) => (
                    index >= 3 ? null : (
                        <Grid2 xs={12} sm={6} md={6} xl={4} key={index}>
                            <BlogCard blog={blog} title={blog.blogName} description={blog.ShortDescription} writer={blog.writer} useAnotherImage={blog.photoUrl} />

                        </Grid2>
                    )
                ))
            }


        </>

    )
}

export default BlogsSuggestion