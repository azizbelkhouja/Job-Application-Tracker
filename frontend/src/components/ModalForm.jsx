export default function ModalForm({isOpen, onClose, mode, onSubmit}) {

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <form method="dialog">
                    <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit' : 'New Application'}</h3>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <button className="btn btn-success" onClick={onSubmit}>{mode === 'edit' ? 'Save Changes' : 'Create'}</button>
                </form>
            </div>
            </dialog>
        </>
    )
}