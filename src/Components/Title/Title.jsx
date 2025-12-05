import './Title.css'
const Title = ({first,second}) => {
    return ( 
        <>
            <div className="container title">
                <a href="#">{first}</a>
                <h2>{second}</h2>
                
            </div>
        </>
     );
}
 
export default Title;