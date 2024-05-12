import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useParams } from "react-router-dom"
import blogs from './blogsData.json'



const BlogContent = () => {
    const { title } = useParams()

    const decodedTitle = decodeURIComponent(title);

    console.log(decodedTitle)

    const blog = blogs.find(blog => blog.blogName.split(' ').join('_') === decodedTitle);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <Grid2 container width={"100vw"} sx={{ marginTop: "1000px" }}>

            <Grid2 md={6}><Typography>This is a test</Typography></Grid2>
            <Grid2 md={6}><Typography>This is a test</Typography></Grid2>



        </Grid2>

    )
}


export default BlogContent