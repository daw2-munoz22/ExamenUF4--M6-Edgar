import React, { useState, useEffect } from 'react';

function TablaResueltos() {
  const [ticketsResueltos, setTicketsResueltos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicketsResueltos = async () => {
      try {
        const response = await fetch('https://server-examen-edgar.vercel.app/ticketsResueltos');
        if (response.ok) {
          const data = await response.json();
          data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
          setTicketsResueltos(data);
        } else {
          console.error('Error al obtener los datos de tickets resueltos:', response.status);
        }
      } catch (error) {
        console.error('Error al obtener los datos de tickets resueltos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTicketsResueltos();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

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
        {ticketsResueltos.map(ticket => (
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
            <td>
              <button className="btn btn-info" title="Ver comentarios">
                <i class="bi bi-chat-left-dots"></i>
              </button>
            </td>
            <td>
              <button className="btn btn-danger" title="Eliminar ticket">
                <i class="bi bi-bucket"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default TablaResueltos;
