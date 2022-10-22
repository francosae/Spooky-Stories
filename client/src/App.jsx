import { AuthContextProvider } from "./contexts/auth"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Feed, Profile, Post, Landing, NotFound } from './pages'
import { Footer, Navbar } from "./components"

export default function AppContainer(){
  return(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

function App() {
  return (
      <>
      <Navbar /> 
      <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/*" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/user/:username" element={<Profile /> } />
        <Route path="/posts/:username/:postid" element={<Post /> } />
        <Route path="*" element={<NotFound /> } />
      </Routes>
      </BrowserRouter>
      <Footer />
      </>
  )
}

