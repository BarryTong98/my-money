import {useState} from "react";
import {projectAuth} from "../firebase/config";
import {useAuthContext} from "./useAuthContext";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext()
    const [isCancelled, setIsCancelled] = useState(false);

    const signup = async (email, password, displayName) => {
        //if we meet an error and we want to submit it again, we should make it null when we do it
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            // add display name to user
            await res.user.updateProfile({displayName})

            // dispatch login action
            dispatch({type: 'LOGIN', payload: res.user})
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    // useEffect(() => {
    //     return () => {
    //         setIsCancelled(true)
    //     }
    // })

    return {error, isPending, signup}
}