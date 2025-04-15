import { useState } from 'react';

export default function ModalForm({isOpen, onClose, mode, onSubmit, jobData}) {

    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [link, setLink] = useState('');

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jobData = {company, position, location, date, status, link};
            await onSubmit(jobData);
            onClose();
        }
        catch (error) {
            console.error('Error submitting form:', error);
        }
        
        onClose();
    }

    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg py-4 text-center">{mode === 'edit' ? 'Edit' : 'New Application'}</h3>

                <form method="dialog" onSubmit={handleSubmit}>
                    <div className="flex mb-4 justify-between">
                        <label className="flex input-bordered items-center gap-2 mr-1 input my-4">
                            <input type="text" className="grow" placeholder="Azienda" value={company} onChange={(e) => setCompany(e.target.value)} />
                        </label>
                        <label className="flex input-bordered items-center gap-2 input my-4">
                            <input type="text" className="grow" placeholder="Posizione"  value={position} onChange={(e) => setPosition(e.target.value)}/>
                        </label>
                    </div>

                        Data di candidatura:
                    <label className="flex items-center gap-2 input mb-4 w-full">
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </label>

                    <div className="flex mb-4 justify-between">
                        <label className="flex items-center gap-2 input my-4">
                            <input type="text" className="grow" placeholder="Luogo"  value={location} onChange={(e) => setLocation(e.target.value)}/>
                        </label>
                        <label className="flex items-center gap-2 m-2">
                            <select value={status} onChange={handleStatusChange} className="select">
                                <option value="" disabled >Stato</option>
                                <option value="Candidatura inviata">Candidatura inviata</option>
                                <option value="Colloquio programmato">Colloquio programmato</option>
                                <option value="Offerta ricevuta">Offerta ricevuta</option>
                                <option value="Rifiutato">Rifiutato</option>
                            </select>
                        </label>

                    </div>
                    <label className="flex items-center gap-2 input my-4 w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
                        <input type="text" placeholder="- Link Offerta -"  value={link} onChange={(e) => setLink(e.target.value)}/>
                    </label>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                    <button className="btn btn-success w-full" onClick={onSubmit}>{mode === 'edit' ? 'Save Changes' : 'Create'}</button>
                </form>
            </div>
            </dialog>
        </>
    )
}