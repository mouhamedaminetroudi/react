export default function Header(){
    const style={
        backgroundColor:"teal",
        width:"100%",
        height:"150px",
        marginTop:"0px",
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"30px",
        boxShadow:"0px 5px 13px rgba(0 0 0 0.4)",

    };
    return(
        <div style={style}>
        <h1>Troudi AMIN</h1>
        </div>
    );
}