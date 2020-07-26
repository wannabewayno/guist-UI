const paddingTop = 0.3;

const sharedStyle = {
    padding:`${paddingTop}rem 0.5rem`,
    border:'1.5px solid rgb(255,125,125)',
    whiteSpace:'nowrap',
}

export const gamertagStyle = {
    ...sharedStyle,
    backgroundColor:'rgb(255,125,125)',
    width:'100%',
}

export const numberStyle = {
    ...sharedStyle,
    borderBottomLeftRadius:'5px',
    borderTopLeftRadius:'5px',
    width:'60px',
}

export const containerStyle = {
    display:'flex',
    alignItems:'center',
    height:`${1.5+paddingTop*2}rem`,
    position:'relative',
    width:'225px',
    textAlign:'center',
    margin:'5px auto',
}