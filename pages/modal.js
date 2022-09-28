import React, { useState } from "react";
import Modal from "../components/events/organiser/Modal";


export default function modals() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <button className="modalBtn rounded-3xl bg-gray-500 text-white" onClick={() => setOpenModal(true)}>View Event</button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />

        </div>
    )
}
