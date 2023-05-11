import "./Modal.css";

function Modal({ setOpenModal, cvData, index }) {
  const clsoeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="mymodal">
      <div className="details">
        <div className="close-button" onClick={clsoeModal}>
          X
        </div>
        <p className="job-details">
          <span style={{ fontWeight: "bold" }}>{cvData[index].jobDetail}</span>
        </p>
        <p className="learning-experience">
          <span>{cvData[index].jobExperience}</span>
        </p>
        <p className="education-details">
          <span style={{ fontWeight: "bold" }}>
            {cvData[index].educationDetail}
          </span>
        </p>
        <p>
          <span>{cvData[index].educationExperience}</span>
        </p>
      </div>
    </div>
  );
}

export default Modal;
