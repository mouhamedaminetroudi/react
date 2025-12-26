export default function (/* props */{name,email,para="no content",children}){
/*     const name=props.name
    const email=props.email    eli fi coment nafs eli fel parametre*/ /* hedhi object destructuring */
    
    return(
        <div>
            <div style={{backGround:"white",boxShadow:"0px 10px 10px gray",margin:"10px"}}>
                
                <h1>{name}</h1>
                <h3>{email}</h3>
                <h3>30/6/2006</h3>
                <hr></hr>
                <p>{children}</p>
            </div>
        </div>
    );
}