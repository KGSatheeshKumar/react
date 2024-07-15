

function PropsComp() {
    let name='sk';
    let sub=['html','css'];
    let a=true;

    let marks = {
            "html": 30,
            "css": 30,
            "js": 30,
            "ReactJs": 30
    }
    return (
        <>
        <p>Name : {name}</p>
        <p>Active : {a.toString()}</p>
        <div>
            <ul>
                {
                    sub.map((v,i) => {
                        return(
                            <li key={i}>
                                <span>{v}</span>
                            </li>
                        )
                    })
                }
            </ul>
                {a 
                    ?
                    <p>Active</p>
                    :
                    <p>
                        Not Active
                    </p>
    }
        </div>
        <div>
        <p>{marks.html}</p>
        </div>

        </>
    )
    }

export default PropsComp;