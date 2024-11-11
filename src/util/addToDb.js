import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getToDonation = () => {
    const storedDonationStr = localStorage.getItem("donation-list");
    return storedDonationStr ? JSON.parse(storedDonationStr) : [];
};

const addToDonation = (id) => {
    const storedList = getToDonation();

    storedList.push(id);

    toast.success("Thank you for your donation", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    localStorage.setItem("donation-list", JSON.stringify(storedList));

    console.log("Added in DB")
};

export { addToDonation, getToDonation };