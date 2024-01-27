import PropTypes from 'prop-types';

export default function Modal({ children, title, close, addClassName }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-0">
        <div className={`relative my-6 mx-auto max-h-screen overflow-y-auto ${addClassName}`}>
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                type="button"
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={close}
              >
                ×
              </button>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto">
              <div className="my-4 text-blueGray-500 text-lg leading-relaxed text-justify">
                {children}
              </div>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  addClassName: PropTypes.string,
};
Modal.defaultProps = {
  addClassName: '',
};
