import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClickBackToHomeView = () => {
    navigate("/app/inbox");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <img
        alt="Workspace not found"
        src="404.jpg"
        className="w-100 h-80 text-gray-400 fill-current mx-auto"
      />
      <h1 className="text-2xl text-lightgrey font-semibold">
        Workspace not found.
      </h1>
      <button
        className="bg-red-500 text-white py-2 px-5 rounded-md mt-6 text-base"
        onClick={handleClickBackToHomeView}
      >
        Back to Home view
      </button>
    </div>
  );
};
