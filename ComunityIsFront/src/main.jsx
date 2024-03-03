import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/UI/Header'
import ProfileForm from './Components/perfil/ProfileForm'
import Login from './Components/forms/Login'
import App from './App'
import AdminComponent from './Components/Admi/Admin'
import ProfileForm1 from './Components/perfil/ProfileFrom1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header />
  <ProfileForm1></ProfileForm1>
  </React.StrictMode>,
)
