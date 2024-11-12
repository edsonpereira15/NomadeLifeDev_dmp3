import {useInsertDocument} from ' ../../hooks/useInsertDocument'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import { useState } from 'react'



const createpost = () => {
    const [title, settitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const [formError, setFormerror] = useState("")
    const { user } = usenavigate()

    const { usedocument, response } = useInsertDocument("post")

    const handlerSubmit = (e) => {
      e.preventDefault()
      setFormerror("")
    }

    try {
      new URL(image)
    } catch (error) {
      setFormerror("A imagem precisa de uma URL.")
    }

    const tagsArray = tags.split(',').map(tag = tag.trim().toLowerCase())

    if (!title || !image || !tags || !body) {
      setFormerror("por favor preencha todos os campos do formulário do post")
    }

    console.log(tagsArray)

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createBy: user.displayName
    })

    if(setFormerror) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createBy: user.displayName
    })

    navbigate('/')

    return(
      <>
      </>
    )

}

export default createpost