import { p2e } from "@/utils/replaceNumber";
import styles from "./TextInput.module.css"

function TextInput({
    title,
    name,
    profileData,
    setProfileData,
    textArea = false
}) {

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: p2e(value) });
    };


    return (
        <div className={styles.container}>
            <p>{title}</p>
            {textArea ?
                <textarea
                    type="text"
                    name={name}
                    value={profileData[name]}
                    onChange={changeHandler} /> :
                <input
                    type="text"
                    name={name}
                    value={profileData[name]}
                    onChange={changeHandler}
                />}
        </div>
    )
}

export default TextInput
