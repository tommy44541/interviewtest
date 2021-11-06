import React,{useState} from 'react';
import Modal from "react-modal";
import "./ProductDetail.scss";


const ProductDetail = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
        }


    return (
        <div className="modal-container">
        <button onClick={toggleModal} className="toggle-btn">點我看商品</button>
            <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog"
                    className="mymodal"
                    overlayClassName="myoverlay"
                    closeTimeoutMS={500}
                    >
                    <div>
                        <img src={props.image} alt={props.title} />
                        <div>name:{props.title}</div>
                        <div>price:{props.price}</div>
                        <div>category:{props.category}</div>
                        <div>{props.description}</div>
                    </div>
                    <button onClick={toggleModal}>Close modal</button>
            </Modal>
        </div>
    );
};

export default ProductDetail;