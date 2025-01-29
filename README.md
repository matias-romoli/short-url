# **ACORTADOR DE URL CON NODE.JS Y REACT JS** // **SHORT URL WITH NODE.JS AND REACT JS**

<img src="https://github.com/matias-romoli/short-url/blob/main/home" alt="Home"/>

Este proyecto consiste en una **aplicación de acortador de URLs** desarrollada utilizando **Node.js** para el **backend** y **React.js** para el **frontend**. La aplicación emplea **Server-Side Rendering (SSR)**, lo que permite una **renderización rápida y dinámica** de las páginas, optimizando la **velocidad de carga**.

En este caso, se utilizan **dos rutas principales**:

- **/url** para manejar las solicitudes **POST** y **GET**.

### **¿CÓMO FUNCIONA?**

Ambas rutas están conectadas con la clase **DB**, que interactúa con una base de datos **MySQL**. La clase se encarga de **recuperar las URLs** previamente almacenadas y **guardar las nuevas URLs** que se envían desde el frontend, evitando que se guarden **URLs duplicadas**.

#### **RUTA POST:**

```javascript
const rows = await db.selectQuery("url", data);
if (rows.length > 0) {
    return res.status(200).json(rows);
}
```
Esta ruta verifica si la URL ya existe en la base de datos. Si la URL ya está registrada, devuelve los datos correspondientes: ID, URL y SHORTURL.

Si la URL no existe, se valida que sea una URL válida utilizando una expresión regular:
```
if (regex.test(data) === true) {
    const save = await db.saveDatabase(data);
    if (save) {
        const newRows = await db.selectQuery("id", save);
        return res.status(200).json(newRows);
    }
} else {
    return res.status(404).json("Por favor ingresa una URL válida.");
}
```

Si la URL ingresada es válida, se guarda en la base de datos y se devuelve la URL acortada. Si la URL no es válida, el usuario recibirá el siguiente mensaje de error:
<img src="https://github.com/matias-romoli/short-url/blob/main/error" alt="Error"/>

Si la URL es válida, la aplicación mostrará la URL acortada, proporcionando la opción de copiarla:
<img src="https://github.com/matias-romoli/short-url/blob/main/result" alt="Resultado"/>
