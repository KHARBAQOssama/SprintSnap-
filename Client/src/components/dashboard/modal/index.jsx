import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../../features/appStatus/slice";
import AddProjectModal from "./AddProjectModal";

const ModalContentRenderer = () => {
  const { addingProject } = useSelector((state) => state.appStatus);
  return addingProject ? <AddProjectModal /> : <></>;
};
const Modal = () => {
  const { modalOpen, addingProject } = useSelector((state) => state.appStatus);
  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeModal());
  };
  return (
    <>
      {modalOpen && (
        <div className="w-[100vw] h-[100vh] overflow-scroll absolute top-0 left-0 bg-[#7442b070] flex items-center justify-center">
          <div className="relative bg-white p-5 rounded-xl min-w-max w-[55%]">
            <ModalContentRenderer />
            <button
              className="text-gray-600 absolute top-5 right-5"
              onClick={close}
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
