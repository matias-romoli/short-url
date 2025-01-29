 
Acortador URL con Node y React JS // Short URL with Node and React JS

<img src="https://github.com/matias-romoli/short-url/blob/main/home"/> 

La aplicación está diseñada mediante Server-Side Rendering (SSR), ya que se renderiza a través del backend con uno de los framework más conocidos: Express JS. De esta forma, se busca una aplicación más rápida y dinámica, mejorando la velocidad de carga de las páginas, y por consiguiente, las rutas, que este caso son dos: /url para el POST y el GET. ¿Que hace cada una? 

Ambas están conectadas con la clase DB. Esta, interactua con la base de datos MySQL para obtener las URL cargadas previamente en la db y guardar las URL que llegan desde el frontend. En este contexto, se regula que no se vuelva a guardar una URL existente. 

POST: 

    const rows = await db.selectQuery("url", data);
      if (rows.length > 0) {
        return res.status(200).json(rows);
      }

    Verifica si la URL existe en la DB. Si existe, trae los datos: ID, URL Y SHORTURL. Si no,

    if (regex.test(data) === true) {
        const save = await db.saveDatabase(data);
        if (save) {
          const newRows = await db.selectQuery("id", save);
          return res.status(200).json(newRows);
        }
      } else {
        return res.status(404).json("Please enter a valid url.");
      }

    continua, vé que la URL sea correcta y el usuario no ingrese cualquier cosa. Si ingresa cualquier cosa, se verá este error: 

<img src="https://github.com/matias-romoli/short-url/blob/main/error"/> 

Si no, mostrara la URL, brindado la opción de copiarla.


<img src="https://github.com/matias-romoli/short-url/blob/main/result"/> 
