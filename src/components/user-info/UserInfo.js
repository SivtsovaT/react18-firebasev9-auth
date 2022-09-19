import React, {useEffect, useState} from "react";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../../firebase-config";

const UserInfo = () => {
	const [userName, setUserName] = useState('');
	const [users, setUsers] = useState([]);
	const [userBirthday, setUserBirthday] = useState('');
	const [userGender, setUserGender] = useState('male');


	useEffect(() => {
		getUsers()
	}, [])

	useEffect(() => {
		console.log(users);
	}, [users]);

	const getUsers = () => {
		const userCollectionRef = collection(db, 'users');
		getDocs(userCollectionRef).then(response => {
			const user = response.docs.map(doc => ({
				data: doc.data(),
				id: doc.id,
			}))
			setUsers(user)
		}).catch(error => console.log(error.message))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userName === '' || userBirthday === '' || userGender === '') {
			return
		}
		const userCollectionRef = collection(db, 'users');
		addDoc(userCollectionRef, {userName, userBirthday, userGender}).then(response => {
			console.log(response)
		}).catch(error => console.log(error.message))
	}



	return (
		<div>
			<div>See your info</div>
				<ul>
					{users.map(user =>
						<li key={user.id}>{user.id}:{user.data.userName} {user.data.userGender}</li>
					)}
				</ul>
				<button onClick={() => getUsers()}>REFRESH USERS</button>
		</div>
	)
}

export default UserInfo;