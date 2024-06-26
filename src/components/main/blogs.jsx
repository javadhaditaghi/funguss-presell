import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import DesktopHeader from "./header/header-desktop"
import BlogsHeaderText from "./header/blogs-header-text"
import BlogCard from "./Blogs/singleBlog"
import BlogsPagination from "./Blogs/blogsPagination"
import { useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from "./header/header-mobile"
import BlogContent from "./Blogs/BlogContent"
import { Helmet } from 'react-helmet-async';




const Blogs = () => {

    const [blogItems, setBlogItems] = useState([])
    const matches = useMediaQuery('(min-width:900px)');

    return (
        <>

            <Helmet>
                <title>Blogs</title>
                <meta name="description" content="Explore our comprehensive blog section dedicated to fungus toenail solutions. Find expert tips, reviews of top-rated products, and natural remedies to help you achieve healthy, fungus-free nails." />
            </Helmet>

            <Grid2 width={"100vw"} container>
                {matches == true ? <DesktopHeader imgURL='blogSection.png' text={<BlogsHeaderText />} /> : <MobileHeader imgURL="blogSectionMob.png" text={<BlogsHeaderText />} />}

                <Grid2 width={"100vw"} container>

                    <Grid2 xs={.5} md={.5} lg={1.5}>
                    </Grid2>


                    <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto", display: "block" }} container>
                        <Box sx={{ marginY: "40px" }}>
                            <Typography fontFamily={"Oswald"} fontSize={"32px"} fontWeight={700}>Recent blog posts</Typography>
                        </Box>

                        <Grid2 container>
                            {blogItems.map((blog, index) => (
                                <Grid2 xs={12} sm={6} md={6} xl={4} key={index}>
                                    <BlogCard blog={blog} title={blog.blogName} description={blog.ShortDescription} writer={blog.writer} useAnotherImage={blog.photoUrl} role={blog.role} />
                                </Grid2>
                            ))}

                        </Grid2>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                            <BlogsPagination setBlogItems={(p) => setBlogItems(p)} />
                        </Box>
                    </Grid2>


                    <Grid2 xs={.5} md={.5} lg={1.5}>
                    </Grid2>

                </Grid2>








            </Grid2>
        </>
    )
}

export default Blogs