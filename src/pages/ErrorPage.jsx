import Sidebar from "../shared/Sidebar";
const ErrorPage = () => {
  return (
    <>
      <Sidebar />
      <div className="content error">
        <p>
          404
          <br />
          Not found
        </p>
      </div>
      ;
    </>
  );
};

export default ErrorPage;
