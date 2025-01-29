<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
</p>

# 🚀 **ACORTADOR DE URL CON NODE.JS Y REACT JS** 

<br>

<img src="https://github.com/matias-romoli/short-url/blob/main/home" alt="Home"/>

<p style="text-align: justify; font-size: 14px;">
Este proyecto consiste en una aplicación de acortador de URLs desarrollada utilizando Node para el backend y React para el frontend. La aplicación emplea Server-Side Rendering (SSR), lo que permite una renderización rápida y dinámica de las páginas, y por consiguiente de las rutas, optimizando la velocidad de carga. En este caso, se utilizan dos rutas principales:
</p>    

- **/url** para manejar las solicitudes **POST** y **GET**.

### **¿CÓMO FUNCIONAN?**

<p style="text-align: justify; font-size: 14px;">
Ambas rutas están conectadas con la clase DB, que interactúa con una base de datos MySQL. La clase se encarga de crear y reutilizar un 'pool'. Posteriormente, **recupera las URLs** previamente almacenadas, para que no se dupliquen, y guardar las nuevas URLs que se envían desde el frontend. 
</p>    

#### **RUTA POST:**

```javascript
const rows = await db.selectQuery("url", data);
if (rows.length > 0) {
    return res.status(200).json(rows);
}
```
<p style="text-align: justify; font-size: 14px;">
Esta ruta verifica si la URL se encuentra existente en la base de datos. Si la URL está registrada, devuelve los datos correspondientes: ID, URL y SHORTURL. Si la URL no existe, se valida que sea una URL válida utilizando una expresión regular:
</p>    

```
if (regex.test(data) === true) {
    const save = await db.saveDatabase(data);
    if (save) {
        const newRows = await db.selectQuery("id", save);
        return res.status(200).json(newRows);
    }
} else {
    return res.status(404).json("Please enter a valid URL.");
}
```
# 🌐 **Funcionalidad de Acortador de URL** 🔗

<p style="text-align: justify; font-size: 14px;">
  Si la URL ingresada es válida, se guarda en la base de datos y se devuelve la URL acortada. Si la URL no es válida, el usuario recibirá el siguiente mensaje de error:
</p>

<p align="center">
  <img src="https://github.com/matias-romoli/short-url/blob/main/error" alt="Error"/>
</p>
<p align="center" style="font-size: 14px; font-style: italic;">🔴 **Error al ingresar una URL inválida**</p>

<p style="text-align: justify; font-size: 14px;">
  Caso contrario, si la URL es válida, la aplicación mostrará la URL acortada, proporcionando la opción de copiarla:
</p>

<p align="center">
  <img src="https://github.com/matias-romoli/short-url/blob/main/result" alt="Resultado"/>
</p>
<p align="center" style="font-size: 14px; font-style: italic;">✅ **Resultado: URL acortada con éxito**</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/Hooks-61DAFB?style=flat&logo=react&logoColor=black" alt="Hooks" />
</p>

