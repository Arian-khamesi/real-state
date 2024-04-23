"use client"

import { useState } from "react"
import styles from "./AddProfilePage.module.css"
import TextInput from "../module/TextInput"


function AddProfilePage() {

    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: []

    })

    return (
        <div className={styles.container}>
            <h3>ثبت آگهی</h3>
            <TextInput
                title={"عنوان آگهی"}
                name={"title"}
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <TextInput
                title={"توضیحات"}
                name={"description"}
                profileData={profileData}
                setProfileData={setProfileData}
                textArea={true}
            />
            <TextInput
                title={"موقعیت"}
                name={"location"}
                profileData={profileData}
                setProfileData={setProfileData}
                textArea={true}
            />
            <TextInput
                title={"شماره تماس"}
                name={"phone"}
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <TextInput
                title={"بنگاه"}
                name={"realState"}
                profileData={profileData}
                setProfileData={setProfileData}
            />

        </div>
    )
}

export default AddProfilePage
