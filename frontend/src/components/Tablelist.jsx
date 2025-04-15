import axios from 'axios';

export default function TableList({handleOpen}) {

    const jobs = [
        {id: "1", company: "Cineca", position: "Backend Developer", location: "Cento", applicationDate: "13/04/2025", status: "Candidatura inviata", jobLink: "https://link.com"},
        {id: "2", company: "Cineca", position: "Backend Developer", location: "Cento", applicationDate: "13/04/2025", status: "Offerta ricevuta", jobLink: "https://link.com"},
        {id: "3", company: "Cineca", position: "Backend Developer", location: "Cento", applicationDate: "13/04/2025", status: "Colloquio programmato", jobLink: "https://link.com"},
        {id: "4", company: "Cineca", position: "Backend Developer", location: "Cento", applicationDate: "13/04/2025", status: "Rifiutato", jobLink: "https://link.com"},

    ]

    return (
        <>
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
                    {jobs.map(function(job){
                        return (
                            <tr key={job.comapny}>
                                <th>{job.id}</th>
                                <td>{job.comapny}</td>
                                <td>{job.position}</td>
                                <td>{job.location}</td>
                                <td>{job.applicationDate}</td>
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

                                <td><a href={job.jobLink} className="btn btn-outline">Link</a></td>
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
                        )
                    })

                    }
                    
                    </tbody>
                </table>
            </div>
        </>
    )
}