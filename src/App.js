import './App.css';

//importacion de componentes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowMateriales from './components/ShowMateriales';
import CreateMateriales from './components/CreateMateriales';
import EditMateriales from './components/EditMateriales';

function App() {
    return ( 
        <div className = "App" >
            <header className = "App-header" >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <ShowMateriales/> }/>
                        <Route path='/create' element={ <CreateMateriales/> }/>
                        <Route path='/edit/:id' element={ <EditMateriales/> }/>
                    </Routes>
                </BrowserRouter>
            </header>  
        </div>
    );
}

export default App;