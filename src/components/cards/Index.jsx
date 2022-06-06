import './styles.css'
export default function Cards( {name, time, id} ){
    return(
        <div data-aos="fade-right"  data-aos-mirror="false" className='cards'>
            <strong>{id + 1} {name}</strong>
            <small>{time}</small>
        </div>
    )
}