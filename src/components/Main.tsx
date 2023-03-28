import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

export default class Main extends Component {

    render(): ReactNode {
        return <main>
            <h1>Főoldal:</h1>
            <p>Üdvözöllek DJ Petrik weboldalán!</p>
            <p>Válassz a fenti lehetőségek közül!</p>
            <img src="dj.jpg" alt="dj"></img>

            {/* <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/tapasztalat' element={<p>Szakmai tapasztalatok</p>} />
          <Route path='/user'>
            <Route path='profile' element={<p>User profile</p>} />
            <Route path='settings' element={<p>User settings</p>} />
            </Route>
            <Route path='/products/:productId' element={<p>Product</p>} />
            <Route path='/*' element={<p>Ilyen oldal nincs</p>} />
        </Routes> */}
        </main>
    }
}

