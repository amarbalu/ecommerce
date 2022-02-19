const Toast = () => {
  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      <div className="toast show">
        <div className="toast-header">You are Logged In!!!</div>
        <div className="toast-body">
          To Logout, Please click profile icon in header
        </div>
      </div>
    </div>
  );
};

export default Toast;
