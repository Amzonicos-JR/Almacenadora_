export const User = ({name, surname, username,phone, role})=>{ //PROPS -> parámetros que se envían al momento de llamar al componente (la función)
    return (
        <>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{username}</td>
            <td>{phone}</td>
            <td>{role}</td>
        </>
    )
}