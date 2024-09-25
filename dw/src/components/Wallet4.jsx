import React, {useState} from 'react'
import axios from 'axios'
function Wallet4() {
    const [formData, setFormData] = useState({
        accountNo: "",
        amount: "",
        key: "" 
      })
      const [response, setResponse] = useState(null)
      const [isLoading, setIsLoading] = useState(false)
      const [error, setError] = useState('')
    
      function handleChangeSignIn(event) {
          const { name, value } = event.target
          setFormData(prevSignInData => ({
              ...prevSignInData,
              [name]: value
          }))
      }
    
      async function handleSubmitSignIn(event) {
          event.preventDefault()
          setIsLoading(true)
          try {
              const response = await axios({
                  url: "http://localhost:8080/mywallet/deposit/wallet",
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  params: {
                    key: formData.key,
                    accountNo: formData.accountNo,
                    amount: formData.amount,
                }
              })
              setResponse(response)
              alert('Logged In Successfully')
          } catch (error) {
              console.error(error)
              setError('Invalid Credentials')
          } finally {
              setIsLoading(false)
          }
      }
    
      return (
          <div className="signin flex justify-center items-center min-h-screen bg-gray-100">
              <form
                  className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
                  onSubmit={handleSubmitSignIn}
              >
                  
                    
                <h1>Params</h1>
                <input
                      type="text"
                      placeholder="Enter accountNo"
                      name="accountNo"
                      value={formData.accountNo}
                      onChange={handleChangeSignIn}
                      className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      
                  />
                  <input
                      type="text"
                      placeholder="Enter amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChangeSignIn}
                      className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      
                  />
                  <input
                      type="text"
                      placeholder="Enter key"
                      name="key"
                      value={formData.key}
                      onChange={handleChangeSignIn}
                      className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      
                  />
              
                  {error && (
                      <p className="text-red-500 mb-4">{error}</p>
                  )}
                  <button
                      type="submit"
                      value = "Execute"
                      className={`w-full py-2 rounded-lg text-white transition duration-200 ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                      disabled={isLoading}
                  >
                      {isLoading ? (
                          <div className="flex items-center justify-center">
                              <svg
                                  className="animate-spin h-5 w-5 mr-3 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                              >
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
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 16a4 4 0 010-8V4a8 8 0 100 16v-4z"
                                  ></path>
                              </svg>
                              Executing...
                          </div>
                      ) : (
                          'Execute'
                      )}
                  </button>
              </form>
              {response && (
                    <pre className="mt-4 bg-gray-800 text-white p-4">
                        {JSON.stringify(response, null, 2)}
                    </pre>
              )}
          </div>
      )
}

export default Wallet4