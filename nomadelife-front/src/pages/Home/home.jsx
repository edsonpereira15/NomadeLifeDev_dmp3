import React from 'react'
import styles from './home.module.css'
import NavBar from '.components/NavBar'
import logo from '/logo-quadrado.png'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import postDetails from '../postDetails'


const Home = () => {
  const { document : post , loading } =useFetchDocuments("posts")
  const navigate = useNavigate()
  const {querry, setQuerry } = useQuerry() 

  const handlerSubmit = (e) => {
    <e className="preventDefault()"></e>
  
  if(querry){
    return navigate('/search?q =$(querry')
  }

  console.log(loading)

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts recentes</h1>
      <form className={styles.search_form} onSubmit={handlerSubmit}>
        <input type="text"
        placeholder='Busque posts aqui'
        onChange={e=>setQuerry(e.target.value)} />
        <button className="btn btn-dark"> Pesquisar</button>
      </form>

      <div className='post-list'>
      {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>

    )
  }
}
export default Home