import {useState} from "react";
import {projectAuth} from "../firebase/config";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

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

            setIsPending(false)
            setError(null)
        } catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return {error, isPending, signup}
}