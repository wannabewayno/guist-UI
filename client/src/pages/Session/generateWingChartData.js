import parseTeam from "../../utils/parseTeam"



export default (ranks, dataKey, separationKey) => {
    return {
        leftData:[220,120,80,30],
        rightData:[140,130,60,20],
        leftBar:{
          color: parseTeam('terrorists').CSS(),
          borderColor:'transparent',
          thickness:'30px',
          gap:'5px',
        },
        rightBar:{
          color: parseTeam('freedom').CSS(),
          borderColor:'transparent',
          thickness:'30px',
          gap:'5px',
        },
        label:{
          left:'left',
          right:'right',
        }
      }
}