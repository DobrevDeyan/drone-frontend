import React, { useState } from "react"

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your registration logic here
    console.log("Form submitted:", formData)
    // Reset the form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
