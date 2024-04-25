import { Typography, Box } from "@mui/material"
import { styled } from '@mui/material';

const CustomBox = styled(Box)({
    marginBottom: "20px",


});


const ProductText = () => {
    return (
        <Box paddingTop={3}>
            <CustomBox>
                <Typography>
                    We analyzed different aspects of the most rated products, and because of its fascinating features,
                    Funguss™ took first place on our list. Funguss™ Fungal Nail Solution comes from the Golden Nutrition®
                    brand that dominated all other brands in this vast market as a leader in having the best quality products
                    with unique and potent formulas.
                </Typography>
            </CustomBox>
            <CustomBox>
                <Typography variant="h5">Formula</Typography>
                <Typography>
                    The strong Plant-Rich potent formula of Funguss™ speeds up the healing process.
                </Typography>
                <Typography>
                    It helps remove the fungal infection using Undecylenic Acid, Tea Tree Oil, Aloe Vera Oil, Jojoba Oil, Clove Oil, Lavender Oil, and Vitamin E.
                </Typography>
                <Typography>
                    This product uses Undecylenic Acid (a fatty acid that works by preventing fungus growth) to kill fungus. This fatty acid also helps prevent the infection from spreading to other nails.
                </Typography>
                <Typography>
                    It has Aloe Vera oil, a soothing, calming plant with strong healing features, and tea tree oil, an essential oil recognized for its strong soothing and antiseptic properties.
                </Typography>
                <Typography>
                    ojoba oil has various healing properties that may make it effective in treating skin conditions like acne, Eczema, and psoriasis.
                </Typography>
                <Typography>
                    Researchers have also found that clove oil may benefit skin applications and treat infections.
                </Typography>
                <Typography>
                    Finally, Funguss™ is full of Lavender oil, a calming, natural analgesic, and antiseptic essential oil well known for its soothing qualities.
                </Typography>
                <Typography>
                    The ingredients in Funguss™ are rare and unique, while they're compelling and potent.
                </Typography>
            </CustomBox>

            <CustomBox>
                <Typography variant="h5">Users Experience</Typography>
                <Typography>
                    Many people who used the product began to experience yellow keratin debris clearing up and easing itchiness, soreness, and swelling.
                </Typography>
                <Typography>
                    It appears Funguss™ does kill the fungus that causes nails to turn black, yellow, or green and become deformed.
                </Typography>
                <Typography>
                    A fair number of people also saw healthy nails growing within two weeks.
                </Typography>
            </CustomBox>
            <CustomBox>
                <Typography variant="h5">Certificates and price</Typography>
                <Typography>
                    Fungal nail solution is cruelty-free and 100% natural, which means that it only contains natural and pure ingredients.
                </Typography>
                <Typography>
                    Moreover, it is produced in an FDA-registered facility and not tested on animals.
                </Typography>
                <Typography>
                    Considering the ingredients and effectiveness, Funguss™ is also reasonably priced.
                </Typography>

            </CustomBox>
            <CustomBox>
                <Typography variant="h5">Bottom-line</Typography>
                <Typography>
                    We chose Funguss™ for its advanced and natural formula, countless outstanding reviewer experiences, fair price, and great certificates.
                </Typography>
                <Typography>
                    Also, responsible customer service and a money guarantee ensure you buy it without hesitation.
                </Typography>
            </CustomBox>
        </Box >
    )
}


export default ProductText