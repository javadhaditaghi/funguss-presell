import { CardActionArea, Typography, Box } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useParams } from "react-router-dom"
import blogs from './blogsData.json'
import { CardMedia } from "@mui/material"
import blogSectionImage from "./blogSection.png";
import { Avatar } from "@mui/material"
import BlogsSuggestion from "./BlogSuggestion"
import { Divider } from "@mui/material"
import noImge from '/reviews/src/assets/blogs/img_not_found.jpg'
import noImge1 from '/reviews/src/assets/blogs/img_not_found_narrow.jpg'



const BlogContent = () => {
    const { title } = useParams()

    const decodedTitle = decodeURIComponent(title);


    const blog = blogs.find(blog => blog.blogName.split(' ').join('_') === decodedTitle);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const blogImage = blog.photoUrl || noImge;

    const blogImages1 = blog.photoUrl1 || noImge1;
    const blogImages2 = blog.photoUrl2 || noImge1;


    return (
        <Grid2 container width={"100vw"} sx={{ marginTop: { xs: "140px", md: "200px" } }}>


            <Grid2 xs={0} md={.5} lg={1.5}>

            </Grid2>
            <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto" }} container>
                <Grid2 container marginBottom={3}>
                    <Grid2 md={6} paddingRight={{ md: "15px" }}>


                        <CardMedia
                            component="img"
                            src={blogImage}
                            alt="The Consumer Magazine"
                            sx={{ borderRadius: "10px" }}
                        />


                    </Grid2>
                    <Grid2 md={6}>
                        <Typography variant="h1" fontSize={{ xs: "24px", sm: "26px", md: "24px", lg: "28px", xl: "32px" }} fontFamily={"Oswald"} fontWeight={700} marginBottom={2} paddingTop={{ xs: 2, md: 0 }}>{blog.blogName}</Typography>
                        <Typography variant="p" fontSize={{ xs: "14px", md: "12px", lg: "14px", xl: "17px" }} fontFamily={"DM Sans"}>{blog.ShortDescription}</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, mt: 2 }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.pg"
                                sx={{ width: { md: 35, lg: 42.5, xl: 50 }, height: { md: 35, lg: 42.5, xl: 50 }, backgroundColor: "#344038" }}>J</Avatar>
                            <Box>
                                <Typography fontFamily={"Open Sans"} fontSize={{ md: "13px", lg: "14.5px", xl: "16px" }}>{blog.writer}</Typography>
                                <Typography fontFamily={"Open Sans"} fontSize={{ md: "12px", xl: "13px" }}>{blog.role}</Typography>
                            </Box>
                        </Box>

                    </Grid2>
                    <Divider sx={{ backgroundColor: "#344038", width: "100%", height: 3, borderRadius: "50%", display: { md: "none" }, mt: 2 }} />
                </Grid2>
                <Grid2 container>
                    <Typography variant="h5">Introduction</Typography>
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
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>

                        </Grid2>

                        <Grid2 md={4}>
                            <CardMedia
                                component="img"
                                src={blogImages1}
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

                    <Grid2 container spacing={2} alignItems={"center"}>
                        <Grid2 md={4}>
                            <CardMedia
                                component="img"
                                src={blogImages2}
                                alt="The Consumer Magazine"
                                sx={{ borderRadius: "10px", mb: 1 }}
                            />
                        </Grid2>
                        <Grid2 md={8}>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>
                            <Typography marginBottom={1} sx={{ paddingRight: 2 }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.Aliquam ex nibh, Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
                                Aliquam ex nibh,</Typography>
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




        </Grid2 >

    )
}


export default BlogContent