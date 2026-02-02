import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Nome } from './nome'
// import { Cidade } from './cidade' 
// import { Idade } from './idade'
import { Dados } from './components/dados'
import { App } from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Nome />
    <Cidade />
    <Idade /> */}
    <Dados nome="aasdasdss" cidade="Cataguases" idade="18" sobrenome="Luciano" />
    <App  />

  </StrictMode>,
)
