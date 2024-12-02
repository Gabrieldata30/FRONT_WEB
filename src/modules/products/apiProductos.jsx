const URL = 'https://backendweb-xzp6.onrender.com';

export const ObtenerProductos = async () => {
    try{
        const response = await fetch(`${URL}/products`);
        return await response.json();
    }catch{
        console.error("Error al cargar la tabla")
    }
}


export const ObtenerProductoPorId = async (id) => {
    try {
        const response = await fetch(`${URL}/products/${id}`);
        return await response.json();
    } catch {
        console.error("Error al cargar el producto");
    }
};


export const ObtenerProductoPorCategoria = async (id) => {
    try {
        const response = await fetch(`${URL}/tipo/${id}/productos`);
        return await response.json();
    } catch {
        console.error("Error al cargar el producto");
    }
};

export const Registrarse = async (nombre, contraseña, correo, telefono) => {
    try {
      const newUser = { nombre, contraseña, correo, telefono };
      const response = await fetch(`${URL}/inicioSesion/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      return await response.json();
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };

