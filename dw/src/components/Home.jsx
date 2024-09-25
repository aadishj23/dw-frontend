import React from 'react';
import Button from './Button';

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
       
        <div className="col-span-full flex justify-center mb-4">
          <Button path="/signin" text="Login" />
          <Button path="/logout" text="LogOut" />
        </div>


        <div className="col-span-full sm:col-span-1 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-4 text-center">Account</h1>
          <Button path="/Account1" text="POST: customer/bankaccount/add" />
          <Button path="/Account2" text="DELETE: customer/bankaccount/delete" />
          <Button path="/Account3" text="GET: customer/bankaccount/details" />
          <Button path="/Account4" text="GET: customer/bankaccount/all" />
        </div>

        <div className="col-span-full sm:col-span-1 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-4 text-center">Beneficiary</h1>
          <Button path="/Beneficiery1" text="POST: beneficiaries/add" />
          <Button path="/Beneficiery2" text="GET: beneficiaries/view/walletId" />
          <Button path="/Beneficiery3" text="GET: beneficiaries/view/name" />
          <Button path="/Beneficiery4" text="GET: beneficiaries/viewall" />
          <Button path="/Beneficiery5" text="DELETE: beneficiaries/delete" />
        </div>

        <div className="col-span-full sm:col-span-1 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-4 text-center">Wallet</h1>
          <Button path="/Wallet1" text="POST: mywallet/createaccount" />
          <Button path="/Wallet2" text="GET: mywallet/balance" />
          <Button path="/Wallet3" text="POST: mywallet/updateaccount" />
          <Button path="/Wallet4" text="POST: mywallet/deposit/wallet" />
          <Button path="/Wallet5" text="POST: mywallet/transfer/mobile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
