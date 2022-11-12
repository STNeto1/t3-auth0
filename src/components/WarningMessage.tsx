const WarningMessage = ({ message }: { message: string }) => {
  return (
    <div
      className="flex w-full items-center gap-4 rounded bg-red-100 p-2 text-red-500"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default WarningMessage;
