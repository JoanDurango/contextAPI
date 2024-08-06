import { useContext } from "react";
import { Context } from "../context/Context";

export const Login = () => {

  //Extraemos user y setUser del contexto usando useContext
  const { user, setUser } = useContext(Context);


  //Metodo que se ejecuta al hacer click en el formulario
  const saveData = e => {
    e.preventDefault();
    //Crear el objeto del usuario a partir de los datos del formulario
    let identific_user = {
      userName: e.target.userName.value,
      name: e.target.name.value,
      phone: e.target.phone.value
    }
    console.log(identific_user);

    //Actualizamos el estado del usuario
    setUser(identific_user);
  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="login" onSubmit={saveData}>
        <input type="text" name="userName" placeholder="userName"/>
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="phone" placeholder="Phone"/>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

