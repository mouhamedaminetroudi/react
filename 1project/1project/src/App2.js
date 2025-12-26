import Article from "./Article";
function App2(){
    const firstArticle=`
    sqdddddddddddddddddddddddddq
    dsqdsdqdqsdsd`

    const secondArticle=`qsqsaaazzzzzzzzzzzzzzzzzzza
    azeaaezeaea`
return(
    <div>
        <Article para={firstArticle} name="AHMED" email="Ahmed@gmail.com"><h1>hello world</h1></Article>
        <Article para={secondArticle} name="AMIN" email="AMIN@gmail.com"><div style={{backgroundColor:"teal"}}>
            <h2>helooooo</h2>
            <p style={{backgroundColor:"orange"}}>sala yaa salih</p>
            </div></Article>
        <Article name="SALH" email="SALH@gmail.com"/>
        <Article name="CHOUCHA3" email="CHOUCHA3@gmail.com"/>

    </div>
);

}
export default App2;