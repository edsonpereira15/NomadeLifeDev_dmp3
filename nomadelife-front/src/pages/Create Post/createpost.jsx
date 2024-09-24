import {useState} from 'react'

const createpost = () => {
    const [post, setPost] = useState("Mensagem do post")
  return (
    <>
        <p>{post}</p>
            <button>Trocar</button>
    </>
  )
}

export default createpost