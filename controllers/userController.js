import userSchema from "../schemas/userSchema.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


const signIn = async (req, res)=>{
	const { username, password } = req.body;
	dotenv.config();
  try {
    // 1. 사용자가 존재하는지 확인
    const user = await userSchema.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // 2. 비밀번호 확인
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // 3. JWT 토큰 생성
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error : ${err.message}`);
  }
};

const signUp = async (req, res)=>{
	const { username, email, password } = req.body;

  try {
    // 1. 사용자가 이미 존재하는지 확인
    let user = await userSchema.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // 2. 새로운 유저 생성
    user = new userSchema({
      username,
      email,
      password,
    });

    // 3. 비밀번호 해시 (UserSchema의 pre('save')로 처리)
    await user.save();

    // 4. JWT 생성
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // 5. 토큰 반환
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export { signIn, signUp };