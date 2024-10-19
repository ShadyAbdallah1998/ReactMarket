function LoadingButton() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        type="button"
        className="text-black font-bold py-2 px-4 rounded flex items-center"
        disabled
      >
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        Processing...
      </button>
    </div>
  );
}

export default LoadingButton;
