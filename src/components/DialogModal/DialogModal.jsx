import { useRef, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { Dialog } from './DialogModal.styled';
import qr from 'images/qr-code.png';

export const DialogModal = ({ isOpened, onToggle }) => {
  const refDialog = useRef(null);

  useEffect(() => {
    if (isOpened) {
      refDialog.current?.showModal();
      document.body.classList.add('js-modal-open');
    } else {
      refDialog.current?.close();
      document.body.classList.remove('js-modal-open');
    }
  }, [isOpened]);

  const isClickInsideRectangle = (e, element) => {
    const r = element.getBoundingClientRect();

    return (
      e.clientX > r.left &&
      e.clientX < r.right &&
      e.clientY > r.top &&
      e.clientY < r.bottom
    );
  };

  const handleBackdropClick = e =>
    refDialog.current &&
    !isClickInsideRectangle(e, refDialog.current) &&
    onToggle();

  return (
    <Dialog ref={refDialog} onCancel={onToggle} onClick={handleBackdropClick}>
      <button type="button" onClick={onToggle}>
        <IoClose />
      </button>
      <img src={qr} alt="qr code" width="350px" height="350px" />
    </Dialog>
  );
};
