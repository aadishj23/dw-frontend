import React from 'react';
import Button from './Button';

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button path="/signin" text="Signin" />
        <Button path="/Account1" text="POST: customer/bankaccount/add" />
        {/* <Button path="/signin" text="Signin" />
        <Button path="/signin" text="Signin" />
        <Button path="/signin" text="Signin" />
        <Button path="/signin" text="Signin" />
        <Button path="/signin" text="Signin" /> */}
      </div>
    </div>
  );
}

export default Home;
