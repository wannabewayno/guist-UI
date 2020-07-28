const flex = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}


const sharedStyle = {
    ...flex,
    padding:'0.3rem',
    border:'1.5px solid rgb(255,125,125)',
    whiteSpace:'nowrap',
    height:'100%',
    fontSize:'120%'
}

export const gamertagStyle = {
    ...sharedStyle,
    backgroundColor:'rgb(255,125,125)',
    width:'65%',
}

export const numberStyle = {
    ...sharedStyle,
    borderBottomLeftRadius:'5px',
    borderTopLeftRadius:'5px',
    width:'17.5%',
}

export const scoreStyle = {
    ...sharedStyle,
    borderBottomRightRadius:'5px',
    borderTopRightRadius:'5px',
    width:'17.5%'
}

export const containerStyle = {
    ...flex,
    padding:'0',
    height:'40px',
    width:'260px',
    position:'relative',
    textAlign:'center',
    margin:'5px auto',
}
