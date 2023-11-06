"use client";

const ErrorUsers = ({ error }: { error: Error }) => {
  return <h3 className='text-center py-4 text-lg'>{error && error.message}</h3>;
};

export default ErrorUsers;
