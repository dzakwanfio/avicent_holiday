export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src="/images/logoavicent-removebg-preview.png"
            alt="Avicent Logo"
            className={`object-contain ${props.className || ''}`}
        />
    );
}
