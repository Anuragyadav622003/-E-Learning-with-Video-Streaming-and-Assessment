// controllers/userController.js
 // Adjust the import as necessary
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../modals/User.js';


const secrete_key = process.env.secrete_key || 'ELearning';
// Register a new user
export const registerUser = async (req, res) => {

  const { username, email, password, mobileNumber, gender } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, secrete_key);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      mobileNumber,
      gender,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Login a user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email }).select('+password'); // Include the password in the query

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a token
    const token = jwt.sign({ id: user._id, role: user.role },secrete_key, {
      expiresIn: '1h', // Token expiration time
    });

    return res.status(200).json({
      message: 'Login successful',
      token, // Send the token back to the client
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        mobileNumber: user.mobileNumber,
        gender: user.gender,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

export const  sum=(a,b)=>a+b;