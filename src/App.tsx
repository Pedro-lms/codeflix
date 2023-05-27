import {createTheme} from "@mui/material";
import {Box, ThemeProvider } from '@mui/system';
import {Header} from "./components/Header";
import { Layout } from './components/Layout';
import {theme} from './config/theme';

//const theme = createTheme({});

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Box component="main"
    sx={{
      height: '100vh'
    }}
    >
      <Header/>
      <Layout>
          <h1>MVP</h1>
      </Layout>
    </Box> 
  </ThemeProvider>
  );
}

export default App;
