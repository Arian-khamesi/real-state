import styles from "./TextInput.module.css"

function TextInput({
    title,
    name,
    profileData,
    setProfileData,
    textArea = false
}) {

    const changeHandler = (e) => {
        const { name, value } = e.target
        setProfileData({ ...profileData, [name]: value })
    };


    return (
        <div className={styles.container}>
            <p>{title}</p>
            {textArea ?
                <textarea
                    type="text"
                    name={name}
                    value={profileData[name]}
                    onchange={changeHandler} /> :
                <input
                    type="text"
                    name={name}
                    value={profileData[name]}
                    onchange={changeHandler}
                />}
        </div>
    )
}

export default TextInput
