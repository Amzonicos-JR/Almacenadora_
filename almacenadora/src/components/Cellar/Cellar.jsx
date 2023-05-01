export const Cellar = ({ name, description, location, size, availability, price }) => {
    return (
        <>
            <td>{name}</td>
            <td>{description}</td>
            <td>{location}</td>
            <td>{size}</td>
            <td>{availability}</td>
            <td>{price}</td>
        </>
    )
}