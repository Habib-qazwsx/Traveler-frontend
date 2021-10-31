import { getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
    
        return signInWithPopup(auth, googleProvider)
        .finally(()=>setIsLoading(false));
    }
    useEffect(()=>{
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{ })
        .finally(()=> setIsLoading(false));

    }
    return{
        user,
        isLoading,
        setUser,
        signInUsingGoogle,
        signInWithPopup,
        logOut
    }
}

export default useFirebase;