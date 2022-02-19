const Toast = () => {
  return (
    <div class="position-fixed bottom-0 end-0 p-3">
      <div class="toast show">
        <div class="toast-header">You are Logged In!!!</div>
        <div class="toast-body">
          To Logout, Please click profile icon in header
        </div>
      </div>
    </div>
  );
};

export default Toast;
