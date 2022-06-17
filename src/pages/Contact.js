import { useLocation } from 'react-router-dom'
 
export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro commodi, nemo iure maiores exercitationem ipsa eveniet cumque quasi placeat illum modi? Veritatis tenetur vel iure adipisci delectus saepe ab?</p>
    </div>
  )
}