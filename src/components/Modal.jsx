import "./Modals.css";

const Modals = ({children,isOpen, closeModal}) => {
return (
 <article className={`modal ${isOpen && "is-open"}`}>
    <div className="modal-container">
  <button className="modal-close" onClick={closeModal}>X</button>
    {children}
    </div>
</article>
);
};

export default Modals;  