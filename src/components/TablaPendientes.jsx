import { useEffect, useState } from "react";



function TablaPendientes() {
    const [ticketsPendientes, setTicketsPendientes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchTicketsPendientes = async () => {
        try {
          const response = await fetch('https://server-examen-edgar.vercel.app/ticketsPendientes');
          if (response.ok) {
            const data = await response.json();
            setTicketsPendientes(data);
          } else {
            console.error('Error al obtener los datos de tickets pendientes:', response.status);
          }
        } catch (error) {
          console.error('Error al obtener los datos de tickets pendientes:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTicketsPendientes();
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
          {ticketsPendientes.map(ticket => (
            <tr key={ticket.codigo}>
              <td>{ticket.codigo}</td>
              <td>{ticket.fecha}</td>
              <td>{ticket.aula}</td>
              <td>{ticket.grupo}</td>
              <td>{ticket.ordenador}</td>
              <td>{ticket.descripcion}</td>
              <td>{ticket.alumno}</td>
              {/* Botones para resolver, añadir comentario, ver comentarios y eliminar */}
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
  
  export default TablaPendientes;