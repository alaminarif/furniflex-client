import FadeLoader from "react-spinners/FadeLoader";
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center pt-32">
      <FadeLoader color="#e64545" height={15} LoadingSpinner={true} radius={2} margin={2} speedMultiplier={1} width={3} cssOverride={{}} />
    </div>
  );
};

export default LoadingSpinner;
