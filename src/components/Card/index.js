const Card = ({isShowPersonalInfo}) => {
    return(
        <div>
            <h2>Meu card</h2>
            {isShowPersonalInfo && <div>Meu dados pessoais</div>}
        </div>
    )
}

export default Card;