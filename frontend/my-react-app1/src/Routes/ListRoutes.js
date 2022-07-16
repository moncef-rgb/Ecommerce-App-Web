import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Editarticles from '../Component/Articles/Editarticles'
import Insertarticles from '../Component/Articles/Insertarticles'
import Listarticles from '../Component/Articles/Listarticles'
import ListarticlesCard from '../Component/Articles/ListarticlesCard'
import ListarticlesDatatables from '../Component/Articles/ListarticlesDatatables'

import Editcategories from '../Component/Categories/Editcategories'
import ListCategories from '../Component/Categories/ListCategories'
import Insertcategories from '../Component/Categories/Insertcategories'

import Editscategories from '../Component/Scategories/Editscategories'
import Insertscategories from '../Component/Scategories/Insertscategories'
import Listscategories from '../Component/Scategories/Listscategories'
import CartArticle from '../Component/Articles/CartArticle'
import SignIn from '../Component/SignIn'
import Home from '../Home'
import Navbarre from '../Component/Navbarre'


const ListRoutes = () => {
  return (
    <Routes>
      <Route path="/Articles" exact element={<Listarticles />} />
      <Route path="/ArticlesCard" exact element={<ListarticlesCard />} />
      <Route path="/Articles/add" exact element={<Insertarticles />} />
      <Route path="/Articles/edit/:id" element={<Editarticles />} />
      <Route path='/ArticlesDatatables' element={<ListarticlesDatatables />} />
      <Route path="/Cart" element={<CartArticle />} />


      <Route path="/Categories" exact element={<ListCategories />} />
      <Route path="/Categories/add" exact element={<Insertcategories />} />
      <Route path="/Categories/edit/:id" element={<Editcategories />} />

      <Route path="/Scategories" exact element={<Listscategories />} />
      <Route path="/Scategories/add" exact element={<Insertscategories />} />
      <Route path="/Scategprories/edit/:id" element={<Editscategories />} />
      <Route path="/Navbarre" element={<Navbarre />} />

      <Route path="/" element={<SignIn />} />
      <Route path="/Home" element={<Home />} />

    </Routes>
  )
}
export default ListRoutes
