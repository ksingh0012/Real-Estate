import "./App.css";
import Layout from "./components/layout/Layout";  // contains header and footer for using it in every page
import Properties from "./pages/properties/Properties";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Property from "./pages/Property/Property";


function App() {

  const queryClient = new QueryClient()

  return (

    <QueryClientProvider client={queryClient}>  {/* Wraps the application to provide react-query functionality across all components*/} 
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/properties">  {/* in property path if there is no property id then render index page else render propertyId page*/}
              <Route index element={<Properties/>}/>
              <Route path=":propertyId" element={<Property/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools initialIsOpen={false}/>  {/* debugging react-query states*/}
    </QueryClientProvider>
  );
}

export default App;
