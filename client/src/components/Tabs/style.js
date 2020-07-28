
const flex = {
    display:'flex',
    alignItems:'flex-end',
    justifyContent:'space-evenly',
}

export const containerStyle = {
    ...flex,
    width:'100%',
    margin:'0 auto',
}

export const buttonStyle = {
    cursor:'pointer',
    border:'none',
    borderRadius:'0',
    margin:'0',
    backgroundColor:'transparent',
    color:'rgb(0,0,0,0.8)'
}

export const activeStyle = {
    ...buttonStyle,
    fontSize:'36px',
    textDecoration:'underline',
    color:'rgb(0,0,0,1)',
}