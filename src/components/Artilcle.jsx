

const Article = () => {
    const skills = [ 
        { 
            url:<i className="bi bi-filetype-html"></i>,
            nombre:'HTML'
        },
        {
            url:<i className="bi bi-filetype-css"></i>,
            nombre:'CSS'
        },
        {
            url:<i className="bi bi-filetype-js"></i>,
            nombre:'JavaScript'
        },
        {
            url:<i className="bi bi-filetype-jsx"></i>,
            nombre:'React'
        },
        {
          
            nombre:'Redux'
        },
        {
            url:<i className="bi bi-filetype-sql"></i>,
            nombre:'PostgresSQL'
        },
        {
           
            nombre:'Express'
        },
        {
            url:<i className="bi bi-git"></i>,
            nombre:'Node'
        },
        {
            url:<i className="bi bi-github"></i>,
            nombre:'GitHub'
        },
    ]


    return (
        <article className=" row py-2 ">
            <div className="col-md-3">
                <div className="card  bg-primary mb-3">
                    <div className="card-body">
                        <h2>Skills:</h2>
                        <ul>
                            {
                                skills.map(skill => (
                                    <li key={skill}>
                                        <b className="text-uppercase ">
                                            {skill.nombre}
                                        </b>
                                        {skill?.url}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="card bg-light mb-3">
                    <div className="card-body">
                        <h2>Experiencia:</h2>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Article