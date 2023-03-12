import picture from "../resource/pic/no-profile-picture-icon.webp"
import useUser from "../hook/useUser"

function ProfileViewer({ profile }) {
    const user = useUser();
    console.log(user);

    return (
        <div className="content profile">
            <img src={picture} alt="Pic" />
            <div className="profile-data">
                <div className="profile-data__option">
                    <span className="font__subtext">
                        Почта
                    </span>
                    <span className="font__text profile-data__option__value">
                        {user.email}
                    </span>
                </div>
                <div className="profile-data__option">
                    <span className="font__subtext">
                        Пароль
                    </span>
                    <span className="font__text profile-data__option__value">
                        {user.password}
                    </span>
                </div>
                {profile && 
                profile.map((p) => {
                    return (
                        <div className="profile-data__option">
                            <span className="font__subtext">
                                {p.key}
                            </span>
                            <span className="font__text profile-data__option__value">
                                {p.value}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfileViewer;