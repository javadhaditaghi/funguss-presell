import { CardActionArea, Typography, Box } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useParams } from "react-router-dom"
import blogs from './blogsData.json'
import { CardMedia } from "@mui/material"
import blogSectionImage from "./blogSection.png";
import { Avatar } from "@mui/material"
import BlogCard from "./singleBlog"
import BlogsSuggestion from "./BlogSuggestion"



const BlogContent = () => {
    const { title } = useParams()

    const decodedTitle = decodeURIComponent(title);

    console.log(decodedTitle)

    const blog = blogs.find(blog => blog.blogName.split(' ').join('_') === decodedTitle);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <Grid2 container width={"100vw"} sx={{ marginTop: "200px" }}>


            <Grid2 xs={0} md={.5} lg={1.5}>

            </Grid2>
            <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto" }} container>
                <Grid2 container marginBottom={3}>
                    <Grid2 md={6}>


                        <CardMedia
                            component="img"
                            src={blogSectionImage}
                            alt="The Consumer Magazine"
                            sx={{ width: { xs: "400px", md: "700px" }, borderRadius: "10px" }}
                        />


                    </Grid2>
                    <Grid2 md={6}>
                        <Typography variant="h1" fontSize={32} fontFamily={"Oswald"} fontWeight={700} marginBottom={2}>Top 5 Most Effective and Strongest Nail Fungus
                            Solutions Of 2024</Typography>
                        <Typography variant="p" fontSize={17.6} fontFamily={"DM Sans"}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                            Aliquam ex nibh</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, mt: 2 }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.pg"
                                sx={{ width: 50, height: 50, backgroundColor: "#344038" }}>J</Avatar>
                            <Box>
                                <Typography fontFamily={"Open Sans"} fontSize={16}>Javad Haditaghi</Typography>
                                <Typography fontFamily={"Open Sans"} fontSize={13}>Expert</Typography>
                            </Box>
                        </Box>

                    </Grid2>
                </Grid2>
                <Grid2 container>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliq ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>


                    <Grid2 container spacing={2}>
                        <Grid2 md={8}>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>

                        </Grid2>

                        <Grid2 md={4}>
                            <CardMedia
                                component="img"
                                src={blogSectionImage}
                                alt="The Consumer Magazine"
                                sx={{ borderRadius: "10px", float: "right", mb: 1 }}
                            />
                        </Grid2>
                    </Grid2>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliq ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>

                    <Grid2 container spacing={2}>
                        <Grid2 md={4}>
                            <CardMedia
                                component="img"
                                src={blogSectionImage}
                                alt="The Consumer Magazine"
                                sx={{ borderRadius: "10px", mb: 1 }}
                            />
                        </Grid2>
                        <Grid2 md={8}>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>

                        </Grid2>


                    </Grid2>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>
                    <Typography marginBottom={1}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                        Aliquam ex nibh,</Typography>

                    <BlogsSuggestion />
                </Grid2>
            </Grid2>

            <Grid2 xs={0} md={.5} lg={1.5}>
            </Grid2>




        </Grid2>

    )
}


export default BlogContent