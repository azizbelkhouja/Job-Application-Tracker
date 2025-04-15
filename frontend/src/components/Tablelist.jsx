import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TableList({handleOpen, searchTerm}) {

    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/jobs');
                setTableData(response.data);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    const filteredData = tableData.filter( job => 
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.application_date?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.status.toLowerCase().includes(searchTerm.toLowerCase()) ||  
        job.job_link.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>

            {error && <div className="alert alert-error shadow-lg mt-10"></div>}

            <div className="overflow-x-aut mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Azienda</th>
                            <th>Posizione</th>
                            <th>Luogo</th>
                            <th>Data di candidatura</th>
                            <th>Stato</th>
                            <th>Link offerta</th>
                            <th>Aggiorna</th>
                            <th>Elimina</th>
                        </tr>
                    </thead>
                    <tbody  className="hover:bg-base-300">
                    {/* row 1 */}
                    {filteredData.map((job)=>(
                            <tr key={job.id}>
                                <th>{job.id}</th>
                                <td>{job.company}</td>
                                <td>{job.position}</td>
                                <td>{job.location}</td>
                                <td>{new Date(job.application_date).toLocaleDateString()}</td>
                                <td>
                                    <button
                                        className={`btn btn-sm rounded-full text-black ${
                                        job.status === "Candidatura inviata"
                                            ? "bg-green-900"
                                            : job.status === "Colloquio programmato"
                                            ? "bg-green-500"
                                            : job.status === "Offerta ricevuta"
                                            ? "bg-green-300"
                                            : job.status === "Rifiutato"
                                            ? "bg-red-500"
                                            : "bg-gray-300"
                                        }`}
                                    >
                                        {job.status}
                                    </button>
                                </td>

                                <td><a href={job.job_link} className="btn btn-outline">Link</a></td>
                                <td>
                                <button onClick={() => handleOpen('edit')} className="update btn btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3zM3 21h18" />
                                    </svg>
                                </button>

                                </td>
                                <td>
                                <button className="delete btn btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                </td>
                            </tr>
                        
                        ))
                    }
                    
                    </tbody>
                </table>
            </div>
        </>
    )
}