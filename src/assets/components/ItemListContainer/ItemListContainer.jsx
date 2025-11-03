export const ItemListContainer = ({ titulo, productos }) => {
    //estado

    //llamada a la api

    return (
    <section>
        <h1>{titulo}</h1>

        {productos.length ? (
            productos .map((prod) => (
            <article key={prod.id}>
            <h2>{prod.nombre}</h2>
            <p>Precio: ${prod.precio}</p>
            <p>Descripcion{prod.descripcion}</p>
        </article>
    )) 
) : (
    <p>No hay productos</p>
)}
    </section>
    );
};