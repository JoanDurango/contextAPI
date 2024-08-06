import { useContext } from "react";
import { Context } from "../context/Context";

export const Contact = () => {

  const nameContact = useContext(Context);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Esta es la página Contact...</p>
      <p>Estos son los datos de contacto: <strong>{nameContact.phone}</strong></p>
      <p>Objeto: {JSON.stringify(nameContact)}</p>
    </div>
  )
}
