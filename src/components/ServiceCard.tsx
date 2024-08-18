import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import Image from 'next/image';
import { IoCloudUploadOutline } from 'react-icons/io5';

interface ServiceCardProps {
    Img: string;
    service: string;
    description: string;
    price: number;
    session: number;
}

export const ServiceCard = ({ Img, service, description, price, session }: ServiceCardProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="flex flex-col xl:flex-row items-center gap-10">
                <img className="lg:w-[40%]" src={Img} alt="service-image" />
                <div className="lg:w-[60%]">
                    <div className="lg:mr-16 p-3 sm:px-10 sm:py-6 flex flex-col gap-4 bg-[#F8FAFC]">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#516EFF]">{service}</h3>
                        <p>{description}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                            <p className="text-xl font-bold text-[#516EFF]">
                                Fee - ₹{price}/- <span className="text-lg text-black"> {session} Session</span>
                            </p>
                            <button
                                className="px-3 py-2 rounded-md bg-[#516EFF] text-white"
                                onClick={() => setModalOpen(true)}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={modalOpen}
                onClose={() => setModalOpen(false)}
                size="md"
                className="flex items-center justify-center"
            >
                <Modal.Header>Book a Service</Modal.Header>
                <Modal.Body className="p-4 max-w-md mx-auto">
                    <form className="flex flex-col gap-4 max-h-[80vh] overflow-auto">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex flex-1 flex-col">
                                <label htmlFor="name">Name</label>
                                <input
                                    className="px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    className="px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none"
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="9927367923"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex flex-1 flex-col">
                                <label htmlFor="date">Date</label>
                                <input
                                    className="w-full px-4 py-2 rounded-lg border-2 text-gray-400 focus:border-[#516EFF] outline-none"
                                    type="date"
                                    name="date"
                                    id="date"
                                    required
                                />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <label htmlFor="Services">Services</label>
                                <select
                                    className="w-full px-4 py-2.5 rounded-lg border-2 text-gray-400 focus:border-[#516EFF] outline-none"
                                    name="Services"
                                    id="Services"
                                    required
                                >
                                    <option value="homevisit">Home Visit</option>
                                    <option value="onlineconsultation">Online Consultation</option>
                                    <option value="visitClinic">Visit Clinic</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 md:gap-10">
                            <label htmlFor="uploads" className="flex items-center gap-3">
                                <span>Upload Your Photo</span>
                                <IoCloudUploadOutline className="text-black text-4xl border-2 rounded-lg p-1" />
                                <input
                                    type="file"
                                    name="uploads"
                                    id="uploads"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                {preview && (
                                    <div className="relative w-[80px] h-[80px] overflow-hidden rounded-full">
                                        <Image
                                            src={preview as string}
                                            alt="Preview"
                                            layout="fill"
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="w-full px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none"
                                name="message"
                                id="message"
                                rows={4}
                                placeholder="Include a message..."
                            ></textarea>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                className="w-5 h-5 border-2 rounded-xl"
                                type="checkbox"
                                name="policy"
                                id="policy"
                                required
                            />
                            <p className="text-[#52525B]">You agree to our friendly privacy policy.</p>
                        </div>
                        <button className="bg-[#516EFF] text-white px-6 py-3 rounded-lg">
                            Confirm Appointment
                        </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalOpen(false)} className="bg-[#516EFF] text-white rounded-lg">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
