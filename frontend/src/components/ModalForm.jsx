export default function ModalForm({isOpen, onClose, mode, onSubmit}) {

    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg py-4 text-center">{mode === 'edit' ? 'Edit' : 'New Application'}</h3>
                <form method="dialog">
                    <div className="flex mb-4 justify-between">
                        <label className="flex input-bordered items-center gap-2 mr-1 input my-4">
                            <input type="text" className="grow" placeholder="Azienda" />
                        </label>
                        <label className="flex input-bordered items-center gap-2 input my-4">
                            <input type="text" className="grow" placeholder="Posizione" />
                        </label>
                    </div>

                    <label className="flex items-center gap-2 input my-4 w-full">
                        Data di candidatura
                        <input type="date" className="input border-0"/>
                    </label>

                    <div className="flex mb-4 justify-between">
                        <label className="flex items-center gap-2 input my-4">
                            <input type="text" className="grow" placeholder="Luogo" />
                        </label>
                        <label className="flex items-center gap-2 input my-4 border-0 active:border-0">
                            <select defaultValue="Candidatura inviata" className="select">
                                <option disabled={true}>Stato</option>
                                <option>Candidatura inviata</option>
                                <option>Colloquio programmato</option>
                                <option>Offerta ricevuta</option>
                                <option>Rifiutato</option>
                            </select>
                        </label>

                    </div>
                    <label className="flex items-center gap-2 input my-4 w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
                        <input type="url" placeholder="- Link Offerta -" />
                    </label>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                    <button className="btn btn-success w-full" onClick={onSubmit}>{mode === 'edit' ? 'Save Changes' : 'Create'}</button>
                </form>
            </div>
            </dialog>
        </>
    )
}