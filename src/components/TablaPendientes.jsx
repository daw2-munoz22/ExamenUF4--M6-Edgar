import  { useContext } from 'react';



function TablaPendientes() {
  const { datos } = useContext(GlobalContext);

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* Genera el contenido de la tabla de tickets pendientes */}
        {datos.pendientes.map(ticket => (
          <tr key={ticket.codigo}>
            <td>{ticket.codigo}</td>
            <td>{ticket.fecha}</td>
            <td>{ticket.aula}</td>
            <td>{ticket.grupo}</td>
            <td>{ticket.ordenador}</td>
            <td>{ticket.descripcion}</td>
            <td>{ticket.alumno}</td>
            {/* Botones para resolver, añadir comentario, ver comentarios y eliminar */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaPendientes;