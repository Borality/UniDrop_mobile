import { useEffect, useState } from "react";
//firebase
import { authentication } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const getUser = () => {
	const [user, setUser] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(authentication, (user: any) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				// ...
				//Use replace so user cannot go back with button
				setUser(user.uid);
			}
		});
		return unsubscribe;
	}, []);
	return { user };
};

export default getUser;
