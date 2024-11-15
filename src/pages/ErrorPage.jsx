import React from 'react'
import Button from '../components/Button.component';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="text-gray-600">
            Oops! The News page you are looking for could not be found!! Check
            the routes.
          </p>
          <Button >
          <Link to="/"> Go back to Home </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage
