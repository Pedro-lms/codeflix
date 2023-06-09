import { Box, Container } from "@mui/material";
import { write } from "fs";

export function Layout ({children}: {children: React.ReactNode}){
    return (
        <Box>
            <Container
             maxWidth="lg" sx={{mt:4, mb:4, color: "write" ,bg: '#000'}}>
                {children}
            </Container>
        </Box>
    )
}