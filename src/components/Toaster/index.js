const Toast = () => {
  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      <div className="toast show">
        <div className="toast-header">You are Logged In!!!</div>
        <div className="toast-body">Use profile icon in header to logout</div>
      </div>
    </div>
  );
};

export default Toast;
