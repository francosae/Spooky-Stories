import { createContext, useState, useContext, useEffect } from "react";
import API from "../services/apiClient";
const AuthContext = createContext("");

export const AuthContextProvider = ({ children }) => {
	const [initialized, setInitialized] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		console.log(user)
		const fetchUser = async () => {
			const { data } = await API.fetchUserFromToken();
			if (data) {
				setUser(data.existingUser)
			}
			setInitialized(true);
		};

		const token = localStorage.getItem("token");
		if (token) {
			apiClient.setToken(token);
			fetchUser();
		} else {
			setInitialized(false);
		}

	}, [initialized]);

	const handleLogout = async () => {
		await apiClient.logoutUser();
		setUser({});

	};

	const authValue = { user, setUser, initialized, handleLogout};

	return (
		<AuthContext.Provider value={authValue}>
			<>{children}</>
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);