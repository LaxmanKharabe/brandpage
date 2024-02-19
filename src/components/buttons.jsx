export function ButtonsComponent(pros){
    return(
        <div className="container-fluid">
            <button className={pros.stylename}>{pros.text}</button>
        </div>
    )
}