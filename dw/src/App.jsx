import { useState } from 'react'
import axios from 'axios'

function App() {
  const [signInData, setSignInData] = useState({
    mobile: "",
    pass: "" 
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChangeSignIn(event) {
      const { name, value } = event.target
      setSignInData(prevSignInData => ({
          ...prevSignInData,
          [name]: value
      }))
  }

  async function handleSubmitSignIn(event) {
      event.preventDefault()
      setIsLoading(true)
      try {
          const response = await axios({
              url: "http://localhost:8080/user/login",
              method: "POST",
              data: JSON.stringify({
                mobileNumber: signInData.mobile,
                password: signInData.pass
              }),
              headers: {
                  'Content-Type': 'application/json'
              },
          })
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
              <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
              >
                  PHONE
              </label>
              <input
                  type="text"
                  id="phone"
                  placeholder="Enter Phone"
                  name="mobile"
                  value={signInData.mobile}
                  onChange={handleChangeSignIn}
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
              />
              <label
                  htmlFor="pswd"
                  className="block text-gray-700 text-sm font-bold mb-2"
              >
                  PASSWORD
              </label>
              <input
                  type="password"
                  id="pswd"
                  placeholder="Enter Password"
                  name="pass"
                  value={signInData.pass}
                  onChange={handleChangeSignIn}
                  className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
              />
              {error && (
                  <p className="text-red-500 mb-4">{error}</p>
              )}
              <button
                  type="submit"
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
                          Signing In...
                      </div>
                  ) : (
                      'Sign In'
                  )}
              </button>
          </form>
      </div>
  )
}

export default App
