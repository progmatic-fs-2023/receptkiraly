import PropTypes from 'prop-types';
import DetailedRecipe from './DetailedRecipe';

export default function Modal({ children, title, close, addClassName }) {
  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center">
        <div className={`relative overflow-y-auto ${addClassName}`}>
          <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">{title}</h3>
                <button
                  type="button"
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={close}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <DetailedRecipe />
              <div className="my-4 text-blueGray-500 text-lg leading-relaxed text-justify">
                {children}
              </div>
            </div>
            <div className="flex-shrink-0 p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25" />
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
