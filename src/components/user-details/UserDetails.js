import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addDoc} from "firebase/firestore";
import {userCollectionRef} from "../../firestore_collection";
import './UserDetails.css';

const UserDetails = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [userBirthday, setUserBirthday] = useState('');
	const [userGender, setUserGender] = useState('male');


	const addUserInfo =  (e) => {
		e.preventDefault();
		if (userBirthday === '' || userName === '' || userGender === '') {
			return
		}
		addDoc(userCollectionRef, {userBirthday, userName, userGender})
			.then(response => {
				console.log(response);
				navigate("/userinfo");
			}).catch(error => console.log(error.message))
	}
	const showGender = () => {
		let user_gender = document.getElementById('user_gender');
		let user_birthday = document.getElementById('user_birthday');
		let user_name = document.getElementById('user_name');

		user_gender.style.display = 'block';
		user_birthday.style.display = 'none';
		user_name.style.display = 'none';
	}
	const showBirthday = () => {
		let user_gender = document.getElementById('user_gender');
		let user_birthday = document.getElementById('user_birthday');
		let user_name = document.getElementById('user_name');

		user_gender.style.display = 'none';
		user_birthday.style.display = 'block';
		user_name.style.display = 'none';
	}
	const showName = () => {
		let user_gender = document.getElementById('user_gender');
		let user_birthday = document.getElementById('user_birthday');
		let user_name = document.getElementById('user_name');

		user_gender.style.display = 'none';
		user_birthday.style.display = 'none';
		user_name.style.display = 'block';
	}

	return (
		<div>
			<div id='user_gender' style={{display: 'block'}}>
				<p>{userGender}</p>
				<input type='radio'
					   className='gender-input'
					   style={{display: 'block'}}
					   value='male'
					   checked={userGender === 'male' ? true : false}
					   onChange={(event) => setUserGender(event.target.value)}
				/>

				<input type='radio'
					   style={{display: 'block'}}
					   value='female'
					   checked={userGender === 'female' ? true : false}
					   onChange={(event) => setUserGender(event.target.value)}
				/>
				{/*<label female-input>*/}
				{/*	<div className='image'></div>*/}
				{/*</label>*/}
				<button onClick={showBirthday}>NEXT</button>
			</div>

			<div className='wrapper'>
				<div id='user_birthday' style={{display: 'none'}}>
					<div id='return_gender' className='back-link' onClick={showGender}>
						<a href='#'></a>
					</div>
					<h2>When is your birthday?</h2>
					<input type='date'
						   className='input-style'
						   id='age'
						   style={{display: 'block', width: '90%', left: '4%'}}
						   placeholder='age'
						   value={userBirthday}
						   onChange={(e) => setUserBirthday(e.target.value)}
					/>
					<button className='btn-green w-90' onClick={showName}>NEXT</button>
				</div>

			</div>

			<div className='wrapper'>
				<div id='user_name'  style={{display: 'none'}}>
					<div id='return_birthday' className='back-link' onClick={showBirthday}>
						<a href='#'></a>
					</div>
						<h2>What is your name?</h2>
					<input type='text'
						   className='input-style'
						   id='name'
						   style={{display: 'block', width: '90%', left: '4%'}}
						   placeholder='type username'
						   value={userName}
						   onChange={(e) => setUserName(e.target.value)}
					/>
					<button  className='btn-green w-90' onClick={addUserInfo}>NEXT</button>
				</div>

			</div>

		</div>
	)
}

export default UserDetails;
