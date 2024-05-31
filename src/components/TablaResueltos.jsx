import  { useContext } from 'react';

function TablaResueltos() {
  const { datos } = useContext(GlobalContext);

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      <tbody>
        {/* Genera el contenido de la tabla de tickets resueltos */}
        {datos.resueltos.map(ticket => (
          <tr key={ticket.codigo}>
            <td>{ticket.codigo}</td>
            <td>{ticket.fecha}</td>
            <td>{ticket.fecha_resuelto}</td>
            <td>{ticket.aula}</td>
            <td>{ticket.grupo}</td>
            <td>{ticket.ordenador}</td>
            <td>{ticket.descripcion}</td>
            <td>{ticket.alumno}</td>
            {/* Botones para ver comentarios y eliminar */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaResueltos;