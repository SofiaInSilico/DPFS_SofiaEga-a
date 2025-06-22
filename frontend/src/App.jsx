import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserList from './pages/UserList';
import FormInput from './components/FormInput';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductList />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/users' element={<UserList />} />
      <Route path="/crear-producto" element={<CreateProduct />} />
      <Route path="/editar-producto/:id" element={<EditProduct />} />
    </Routes>

  )
}


